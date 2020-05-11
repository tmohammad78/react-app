const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
// const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { getAppEnv } = require('./env');
const env = getAppEnv();
const { PUBLIC_URL = '' } = env.raw;
const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);

module.exports = [
  //// ---------- client -----------
  {
    name: 'client',
    mode: 'development',
    devtool: 'cheap-module-source-map',
    target: 'web',
    entry: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
      resolvePath('../src/client/client.tsx'),
    ],
    output: {
      path: resolvePath('../build'),
      filename: '[name].bundle.js',
      chunkFilename: '[name].chunk.js',
      publicPath: PUBLIC_URL + '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          loader: 'babel-loader',
          resolve: {
            extensions: ['.js', 'jsx', '.tsx', '.ts'],
          },
          options: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.s?css$/,
          include: [resolvePath('../src')],
          exclude: [/\.module\.s?css$/],
          use: [
            'style-loader',
            'css-loader',
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
                  }),
                ],
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|woff|woff2|eot|ttf|jpe?g|gif)$/,
          loader: 'url-loader?limit=8000&name=images/[name].[ext]',
        },

        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['env', 'react'],
              },
            },
            {
              loader: 'react-svg-loader',
              options: {
                jsx: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin(env.forWebpackDefinePlugin),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new LodashModuleReplacementPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      //   new CaseSensitivePathsPlugin(),
      new ErrorOverlayPlugin(),
      new ReactLoadablePlugin({
        filename: 'build/react-loadable.json',
      }),
    ],
    // node: {
    //   dgram: 'empty',
    //   fs: 'empty',
    //   net: 'empty',
    //   tls: 'empty',
    // },
  },
  ///        ----------production ----------
  {
    name: 'server',
    mode: 'development',
    target: 'node',
    devtool: 'source-map',
    entry: [
      'core-js/stable',
      'regenerator-runtime/runtime',
      resolvePath('../src/client/client.tsx'),
    ],
    output: {
      path: resolvePath('../build'),
      filename: 'static/js/[name].[chunkhash:8].js',
      libraryTarget: 'commonjs2',
      chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
      publicPath: PUBLIC_URL + '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          loader: 'babel-loader',
          resolve: {
            extensions: ['.js', 'jsx', '.tsx', '.ts'],
          },
          options: {
            compact: true,
          },
        },
        {
          test: /\.s?css$/,
          include: [resolvePath('../src')],
          exclude: [/\.module\.s?css$/],
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
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
                  }),
                ],
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|woff|woff2|eot|ttf|jpe?g|gif)$/,
          loader: 'url-loader?limit=8000&name=images/[name].[ext]',
        },

        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'react-svg-loader',
              options: {
                jsx: true,
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          sourceMap: true,
          terserOptions: {
            output: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
    plugins: [
      new webpack.DefinePlugin(env.forWebpackDefinePlugin),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new LodashModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
      }),
      new ManifestPlugin({
        fileName: 'asset-manifest.json',
      }),
      new ReactLoadablePlugin({
        filename: 'build/react-loadable.json',
      }),
    ],
    node: {
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    },
  },
];
