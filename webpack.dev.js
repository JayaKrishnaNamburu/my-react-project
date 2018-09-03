const merge = require('webpack-merge');
const PrettierPlugin = require('prettier-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
  plugins: [new PrettierPlugin()],
});
