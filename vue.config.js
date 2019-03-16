module.exports = {
  // 配置【vue-markdown-loader】解析md格式的文件
  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options({
        raw: true,
        preventExtract: true,
        use: [
          [
            require("markdown-it-container"),
            "kv-example-code",
            {
              validate: function(params) {
                return params.trim().match(/^snippet\s*(.*)$/);
              },
              render(tokens, index) {
                let { nesting, info } = tokens[index];
                if (nesting === 1) {
                  // 1.获取代码块的描述内容
                  let content = info.trim().match(/^snippet\s+(.*)$/) || [];
                  let description = content.length > 1 ? content[1] : "";
                  var md = require("markdown-it")();
                  if (description) {
                    description = md.render(description);
                  }
                  // 2.获取代码块内的html和js代码
                  let code = tokens[index + 1].content;
                  // 3.代码块包裹
                  return `
                      <kv-code-snippet>
                          <div class="source" slot="source">${code}</div>
                           ${description}
                          <div slot="code">`;
                } else {
                  return `
                          </div>
                      </kv-code-snippet>\n`;
                }
              }
            }
          ]
        ]
      });
  }
};
