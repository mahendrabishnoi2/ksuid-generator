const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist'
  },
  mode: 'development',
};
