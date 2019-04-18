const MarkdownIt = require("markdown-it");
const MarkdownItContainer = require("markdown-it-container");
const VueTemplateComplier = require("vue-template-compiler");
const hljs = require("highlight.js");
const { parse, compileTemplate } = require("@vue/component-compiler-utils");

module.exports = function (source) {
  // 需要解析成vue代码块集合
  const componentCodeList = [];
  // 初始还MarkdownIt用于转换md文件为html
  const markdownIt = MarkdownIt({
    // 将markdown中的代码块用hljs高亮显示
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`
      }
      return `<pre class="hljs"><code>${markdownIt.utils.escapeHtml(str)}</code></pre>`
    }
  });
  // 使用【markdown-it-container】插件解析【:::snippet :::】代码块为vue渲染
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
        const desc = tokenInfo && tokenInfo.length > 1 ? tokenInfo[1] : "";
        // 获取vue组件示例的代码
        const nextIndex = tokens[index + 1];
        const content = nextIndex.type === "fence" ? nextIndex.content : "";
        // 将content解析为vue组件基本属性对象;
        let { template, script } = parse({
          source: content,
          compiler: VueTemplateComplier,
          needMap: false
        });
        // 将template的转为render函数
        const { code } = compileTemplate({
          source: template.content,
          compiler: VueTemplateComplier
        });
        // 获取script的代码
        script = script ? script.content : "";
        if (script) {
          script = script.replace(/export\s+default/, "const exportJavaScript =");
        } else {
          script = "const exportJavaScript = {} ;";
        }
        // 代码块解析将需要解析vue组件的存储，渲染html用组件名称替代
        const name = `kv-snippent-${componentCodeList.length}`;
        // 渲染组件代码添加到数据集合
        componentCodeList.push(`"${name}":(function () {
          ${code}
          ${script}
           return {
             ...exportJavaScript,
             render,
             staticRenderFns
          }
        })()`);
        // 将需要渲染的示例用kv-code-snippet组件包裹替换插槽显示示例效果
        return `<kv-code-snippet>
                  <div slot="desc">${markdownIt.render(desc)}</div>
                  <${name} slot="source" />
                  <div slot="code">`;
      }
      return `    </div>
                </kv-code-snippet> `;
    }
  });
  // 将所有转换好的代码字符串拼接成vue单组件template、script、style格式
  return `
        <template>
          <div class="kv-snippet-doc">
            ${ markdownIt.render(source)}
          </div>
        </template>
        <script>
           export default {
           name: 'kv-component-doc',
           components: {
            ${componentCodeList.join(",")}
           }
         }
       </script>`;
};