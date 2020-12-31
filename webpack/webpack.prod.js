const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

// Plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const DIST_PATH =  path.resolve(__dirname, '..', 'dist');
const SRC_PATH = path.resolve(__dirname, '..', 'src');

// Bundling popup
module.exports = merge(common, {
  mode: 'production',
  entry: path.join(SRC_PATH, 'index.js'),
  output: {
    filename: 'photon-preact.js',
    path: DIST_PATH
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
});