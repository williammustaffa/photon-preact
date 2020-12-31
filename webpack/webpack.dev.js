const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_PATH =  path.resolve(__dirname, '..', 'dist');
const SRC_PATH = path.resolve(__dirname, '..', 'demo');

// Bundling popup
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry:  path.join(SRC_PATH, 'index.js'),
  output: {
    filename: 'preact-photon-styled.js',
    path: DIST_PATH
  },
  devServer: {
    contentBase: DIST_PATH,
    port: 3001
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Preact Photon Styled DEMO",
      filename: 'index.html',
      template: './demo/index.html'
    })
  ]
});