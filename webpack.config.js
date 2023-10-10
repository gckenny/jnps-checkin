const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
    // new ESLintPlugin({
    //   // plugin options
    //   extensions: ['js', 'jsx'],
    //   fix: false,  // 如果想要自動修復某些問題，可以加上這個選項
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['transform-react-remove-prop-types']
            }
          }
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true, // 這行會讓 webpack-dev-server 在遇到 404 回應時返回 index.html
    static: path.resolve(__dirname, "dist"),
    compress: true,
    port: 3000,
  },
  mode: "development",
};
