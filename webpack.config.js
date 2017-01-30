const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';

const config = {
  entry: `${__dirname}/app/index.js`,
  output: {
    path: `${__dirname}/public`,
    filename: debug ? 'bundle.js' : 'bundle.[hash].js'
  },

  performance: {
    hints: debug ? false : 'warning'
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: debug ? [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }] : ExtractTextWebpackPlugin.extract([
        'css-loader?{discardComments:{removeAll:true}}'
      ])
    }, {
      test: /\.html$/,
      use: 'html-loader'
    }, {
      test: /\.png$/,
      use: 'file-loader'
    }, {
      test: /\.otf$/,
      use: 'file-loader'
    }]
  },

  devServer: {
    contentBase: `${__dirname}/public`,
    port: 3030
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: !debug,
      debug
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),

    new HtmlWebpackPlugin({
      inject: 'body',
      template: `${__dirname}/index.html`
    }),

  ]
};

if (!debug) {
  const prodPlugins = [
    new ExtractTextWebpackPlugin('layout.[contenthash].css')
  ]

  prodPlugins.forEach(plugin =>
    config.plugins.push(plugin))
}

module.exports = config
