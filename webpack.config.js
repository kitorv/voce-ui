const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const markdLoaderPlugin = require("./build/markdown-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  entry: "./site/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "index.js",
  },
  resolve: {
    alias: {
      vue: "@vue/runtime-dom",
      "@": path.resolve("src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".vue", ".json"],
    modules: ["node_modules"],
  },
  devServer: {
    inline: true,
    hot: true,
    stats: "minimal",
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "public"),
    overlay: true,
    clientLogLevel: "error",
    compress: true,
    quiet: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: { loader: "vue-loader" },
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: { appendTsSuffixTo: [/\.vue$/] },
        },
      },
      {
        test: /\.md$/,
        use: [
          { loader: "vue-loader" },
          {
            loader: "./build/markdown-loader.js",
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          {
            loader: "sass-loader",
            options: {
              prependData: '@import "src/styles/variable.scss";',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new markdLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
  ],
};
