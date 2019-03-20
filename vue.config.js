const path = require("path");
module.exports = {
  publicPath: process.argv.includes("--docs") ? "/vue-datagrid" : "/",
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
