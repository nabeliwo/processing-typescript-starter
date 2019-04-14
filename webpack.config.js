"use strict";

const { resolve, path } = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/ts/sketch.ts",
  output: {
    filename: "[name].bundle.js",
    path: resolve("static", "assets"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts|.tsx$/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
  devServer: {
    host: "localhost",
    port: 9000,
    contentBase: resolve("static")
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin()]
};
