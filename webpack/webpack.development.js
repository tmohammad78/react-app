const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const commonVariables = require('./commonVariables');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = [
  {
    name: 'client',
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    entry: {
      app: [
        'webpack-hot-middleware/client?name=client&reload=true',
        // 'react-hot-loader/patch',
        `${commonVariables.appEntry}/client.js`
      ]
    },
    output: {
      //   chunkFilename: `[name].fa.js`,
      filename: 'client.js',
      path: `${commonVariables.outputPath}`,
      publicPath: '/dist/'
      //   publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                sourceMap: true,
                plugins: () => [
                  autoprefixer({
                    // browsers: [
                    //   ">1%",
                    //   "last 4 versions",
                    //   "Firefox ESR",
                    //   "not ie < 9"
                    // ]
                  })
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|woff|woff2|eot|ttf|jpe?g|gif)$/,
          loader: 'url-loader?limit=8000&name=images/[name].[ext]'
        },

        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'react-svg-loader',
              options: {
                jsx: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  },

  //// ---------server ---------
  {
    name: 'server',
    mode: 'development',
    target: 'node',
    devtool: 'source-map',
    // entry: [
    //   'core-js/stable',
    //   'regenerator-runtime/runtime',
    //   'webpack-hot-middleware/client',
    //   `${commonVariables.appEntry}/server.js`
    // ],
    externals: [nodeExternals()],
    entry: {
      app: [
        'core-js/stable',
        'regenerator-runtime/runtime',
        'webpack-hot-middleware/client',
        // 'react-hot-loader/patch',
        `${commonVariables.appEntry}/server.js`
      ]
    },
    output: {
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      path: `${commonVariables.outputPath}`,
      publicPath: '/dist/'
      //   publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          loader: 'ignore-loader'
        },
        {
          test: /\.(png|jpg|woff|woff2|eot|ttf|jpe?g|gif)$/,
          loader: 'url-loader?limit=8000&name=images/[name].[ext]'
        },

        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'react-svg-loader',
              options: {
                jsx: true
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  }
];
