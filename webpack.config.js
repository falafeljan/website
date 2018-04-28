const btoa = require('btoa')
const dotenv = require('dotenv')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const debug = process.env.NODE_ENV !== 'production'

dotenv.config()

let emailAddress

if (!process.env.EMAIL_ADDRESS) {
  throw new Error('Argument `EMAIL_ADDRESS` is required.')
} else {
  emailAddress = btoa(process.env.EMAIL_ADDRESS)
}

module.exports = {
  entry: {
    app: `${__dirname}/app/index.js`,
  },

  output: {
    path: `${__dirname}/dist`,
    filename: '[name].[hash].js',
  },

  mode: debug ? 'development' : 'production',
  devtool: debug ? 'source-map' : false,

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              discardComments: {
                removeAll: true,
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(svg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
      {
        test: /\.(otf|eot|woff|woff2)$/,
        use: 'file-loader',
      },
    ],
  },

  optimization: {
    minimize: !debug,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        EMAIL_ADDRESS: JSON.stringify(emailAddress),
        NODE_ENV: JSON.stringify(debug ? 'development' : 'production'),
      },
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: !debug,
      debug,
    }),

    new HtmlWebpackPlugin({
      inject: 'body',
      template: `${__dirname}/index.html`,
    }),
  ],
}
