const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const package = require('../package.json');

// Plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const DIST_PATH =  path.resolve(__dirname, '..', 'dist');
const SRC_PATH = path.resolve(__dirname, '..', 'src');

// Bundling popup
module.exports = merge(common, {
  mode: 'production',
  entry: path.join(SRC_PATH, 'index.js'),
  output: {
    filename: `${package.name}.js`,
    path: DIST_PATH,
    library: 'PhotonPreact',
    libraryTarget: 'umd'
  },
  externals: {
    'preact': true,
    'preact/hooks': true,
    'preact/compat': true
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['!dist/index.js']
    })
  ]
});