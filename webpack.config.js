const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackplugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  entry: "./site/index.ts",
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "index.js",
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
        use: {
          loader: "vue-loader",
          options: {
            compilerOptions: { preserveWhitespace: false },
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: { appendTsSuffixTo: [/\.vue$/] },
        },
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
