const MarkdownIt = require("markdown-it");
const MarkdownItClass = require("./markdown-it-class");
const MarkdownItContainer = require("markdown-it-container");
const hljs = require("highlight.js");

module.exports = function (source) {
  // 初始还MarkdownIt用于转换md文件为html
  const markdownIt = new MarkdownIt({
    html: true,
    xhtmlOut: true,
    // 将markdown中的代码块用hljs高亮显示
    highlight: function (content, language) {
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

  return `<template>
  <div class="vs-markdown-view">
    ${markdownIt.render(source)}
  </div>
</template>`;
};
