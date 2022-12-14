const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  },
  devServer: {
    static: path.resolve(__dirname, ""),
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
