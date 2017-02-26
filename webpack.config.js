const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')

const debug = process.env.NODE_ENV !== 'production'

const cssLoaders = [{
  loader: 'css-loader',
  options: {
    discardComments: {
      removeAll: true
    }
  }
}, {
  loader: 'postcss-loader',
  options: {
    plugins: () => [autoprefixer]
  }
}]

const config = {
  entry: [`${__dirname}/app/index.js`],
  output: {
    path: `${__dirname}/public`,
    filename: debug ? 'bundle.js' : 'bundle.[hash].js'
  },

  devtool: debug ? 'source-map' : false,

  performance: {
    hints: debug ? false : 'warning'
  },

  stats: {
    children: false
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: debug ?
        ['style-loader'].concat(cssLoaders) :
        ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: cssLoaders
        })
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader'
      }]
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
    port: 3000
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: !debug,
      debug
    }),

    new HtmlWebpackPlugin({
      favicon: `${__dirname}/favicon.ico`,
      inject: 'body',
      template: `${__dirname}/index.html`
    })
  ]
}

if (!debug) {
  const prodPlugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new ExtractTextWebpackPlugin('layout.css'),
    new StyleExtHtmlWebpackPlugin(!debug),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ]

  prodPlugins.forEach(plugin =>
    config.plugins.push(plugin))
}

module.exports = config
