
const merge = require('webpack-merge');
const commonConfiguration = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(commonConfiguration, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCSSExtractPlugin({
      filename: 'styles.[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
});
