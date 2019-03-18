const path = require("path");
module.exports = {
  // 配置【vue-markdown-loader】解析md格式的文件
  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      })
      .end()
      .use("md-loader")
      .loader(path.resolve(__dirname, "./bulid/markdown-loader/index.js"))
      .end();
  }
};
