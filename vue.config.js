module.exports = {
  publicPath: "kv-web-components",
  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("markdown-loader")
      .loader(require("path").resolve(__dirname, "./webpack/markdown-loader.js"))
      .end();
  }
};
