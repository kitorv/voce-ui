const path = require("path");
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
    clientLogLevel: "warning",
    compress: true,
    quiet: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackplugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
  ],
};
