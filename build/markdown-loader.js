const MarkdownIt = require("markdown-it");
const MarkdownItClass = require("./markdown-it-class");
const MarkdownItContainer = require("markdown-it-container");
const hljs = require("highlight.js");
const hljsVueLanguage = require("./hilghlight-vue");
const hashSum = require("hash-sum");
const snippetToVueComponent = require("./snippet-to-component");
const snippetToVueStyle = require("./snippet-to-style");

module.exports = function (source) {
  // 初始还MarkdownIt用于转换md文件为html
  const markdownIt = new MarkdownIt({
    html: true,
    xhtmlOut: true,
    // 将markdown中的代码块用hljs高亮显示
    highlight: function (content, language) {
      hljs.registerLanguage("vue", hljsVueLanguage);
      language = language && hljs.getLanguage(language) ? language : "html";
      const formatCode = hljs.highlight(language, content, true).value;
      return `<pre><code class="language-${language}">${formatCode}</code></pre>`;
    },
  });

  // 定义Markdown标签类名
  markdownIt.use(MarkdownItClass, "vs-markdown-doc");

  // 解析markdown的 【:::tip 内容 ::::】 格式
  markdownIt.use(MarkdownItContainer, "tip", {
    validate(params) {
      return params.trim().match(/^tip\s*(.*)$/);
    },
    // 代码块渲染
    render(tokens, index) {
      return tokens[index].nesting === 1
        ? '<div class="vs-markdown-tip">'
        : "</div>";
    },
  });

  // 解析markdown的 【:::danger 内容 ::::】 格式
  markdownIt.use(MarkdownItContainer, "danger", {
    validate(params) {
      return params.trim().match(/^danger\s*(.*)$/);
    },
    // 代码块渲染
    render(tokens, index) {
      return tokens[index].nesting === 1
        ? '<div class="vs-markdown-danger">'
        : "</div>";
    },
  });

  const vueComponentList = [];
  const vueStyleList = [];

  // 解析markdown的 【:::danger 内容 ::::】 格式
  markdownIt.use(MarkdownItContainer, "snippet", {
    // 验证代码块为【:::snippet :::】才进行渲染
    validate(params) {
      return params.trim().match(/^snippet\s*(.*)$/);
    },
    // 代码块渲染
    render(tokens, index) {
      const token = tokens[index];
      const tokenInfo = token.info.trim().match(/^snippet\s*(.*)$/);
      if (token.nesting === 1) {
        // 获取snippet第一行的表述内容
        const hasTokenContent = tokenInfo && tokenInfo.length > 1;
        const desccription = hasTokenContent ? tokenInfo[1] : "";
        const desccriptionHtml = markdownIt.render(desccription);
        // 获取vue组件示例的代码
        const nextIndex = tokens[index + 1];
        let content = nextIndex.type === "fence" ? nextIndex.content : "";
        // 示例代码解析为Vue组件
        const hashCode = hashSum(content);
        const componentName = `msc-vue-snippet-code-${hashCode}`;
        const componentScript = snippetToVueComponent(content, hashCode);
        vueComponentList.push(
          `"${componentName}":(function () { ${componentScript} })()`
        );
        const componentStyle = snippetToVueStyle(content, hashCode);
        vueStyleList.push(componentStyle);
        // 将需要渲染的示例用nc-snippet组件包裹替换插槽显示示例效果
        return `<vc-code-snippet>
                  <template #description>${desccriptionHtml}</template>
                  <template #example>
                    <${componentName} />
                  </template>
                  <template #source>`;
      }
      return `    </template>
                </vc-code-snippet> `;
    },
  });
  return `<template>
            <div class="vs-markdown-view">
              ${markdownIt.render(source)}
            </div>
          </template>
          <script>
            import { defineComponent } from "vue";
            export default defineComponent({
              components: {${vueComponentList.join(",")}}
            });
          </script>
          <style lang="scss">
             ${vueStyleList.join(" ")}
          </style>`;
};
