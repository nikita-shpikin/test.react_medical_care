const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode,
  entry: './src/index.js',
  output: {
    filename: mode === 'production' ? '[name].[contenthash].js' : '[name].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: mode === 'production' ? '[name].[contenthash].html' : '[name].html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: mode === 'production' ? '[name].[contenthash].css' : '[name].css'
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: './src',
      watch: true,
    },
    port: 0000,
    compress: true,
    hot: true,
    open: true,
  },
}