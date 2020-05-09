const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = [
  {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    target: 'web',
    entry: {
      app: [
        // 'core-js/stable',
        'regenerator-runtime/runtime', // it was an error in @babel/runtime in starting project
        // 'webpack-hot-middleware/client',
        // 'react-hot-loader/patch',
        // `${commonVariables.appEntry}/index.tsx`,
        path.resolve(__dirname, '../src/client/client.tsx'),
      ],
    },
    output: {
      filename: '[name].build.js',
      chunkFilename: '[name].chunk.js',
      path: path.resolve(__dirname, '../lib'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.scss', '.css'],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[path][name]__[local]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  path: path.resolve(__dirname, '../postcss.config.js'),
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },

        {
          test: /\.(png|jpg|woff|woff2|eot|ttf|jpe?g|gif)$/,
          loader: 'url-loader?limit=8000&name=images/[name].[ext]',
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].fa.css',
        chunkFilename: 'static/css/[id].fa.css',
      }),
      new LoadablePlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
  },
];
