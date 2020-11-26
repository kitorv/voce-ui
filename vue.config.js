module.exports = {
  pages: {
    index: {
      entry: "site/index.ts",
    },
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require("node-sass"),
        additionalData: "@import 'src/components/color/src/index.scss';",
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("md")
      .test(/\.md/)
      .use("cache-loader")
      .loader("cache-loader")
      .end()
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("markdown-loader")
      .loader(require("path").resolve(__dirname, "./build/markdown-loader.js"))
      .end();
  },
};
