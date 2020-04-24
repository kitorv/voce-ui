const path = require("path");
const fs = require("fs");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackplugin = require("html-webpack-plugin");
const scssGlobalPath = "./src/styles/variable.scss";

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
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          {
            loader: "sass-loader",
            options: {
              prependData: fs.readFileSync(scssGlobalPath, "utf-8"),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackplugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
  ],
};
