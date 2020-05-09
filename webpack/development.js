const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

//?quiet=true
module.exports = [
  //---------------- client ----------------//
  {
    name: 'client',
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    entry: [
      //   'webpack-hot-middleware/client?name=client&reload=true',
      path.resolve(__dirname, '../src/client/client.tsx'),
    ],
    output: {
      path: path.resolve(__dirname, '../assets'),
      filename: 'client.js',
      publicPath: '/dist',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.scss', '.css'],
    },

    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /(node_modules[\\\/])/,
          use: [{ loader: 'babel-loader' }],
        },
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
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
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  },

  //---------------- server ----------------//
  {
    name: 'server',
    mode: 'development',
    target: 'node',
    devtool: 'source-map',
    entry: [
      //   'webpack-hot-middleware/client?name=server&reload=true',
      path.resolve(__dirname, '../src/server/server.ts'),
    ],
    output: {
      filename: 'bundle.js',
      libraryTarget: 'commonjs2',
      publicPath: '/dist',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.scss', '.css'],
    },
    externals: [webpackNodeExternals()],
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /(node_modules[\\\/])/,
          use: [{ loader: 'babel-loader' }],
        },
        {
          test: /\.(css|scss)$/,
          use: 'ignore-loader',
        },
      ],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  },
];
