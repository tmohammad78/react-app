const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { getAppEnv } = require('./env');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
          exclude: /node_modules/,
          resolve: {
            extensions: ['.js', 'jsx', '.tsx', '.ts'],
          },
          options: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              // options: {
              //   publicPath: '/public/css',
              // },
            },

            // 'style-loader',
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
          options: {
            esModule: false,
          },
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
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[id].css',
        chunkFilename: 'css/[id].css',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new LoadablePlugin({
        writeToDisk: true,
      }),
      new ErrorOverlayPlugin(),
    ],
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
          exclude: /node_modules/,
          resolve: {
            extensions: ['.js', 'jsx', '.tsx', '.ts'],
          },
          options: {
            compact: true,
          },
        },
        {
          test: /\.s?css$/,
          loader: 'ignore-loader',
        },
        {
          test: /\.(png|jpg|woff|woff2|eot|ttf|jpe?g|gif)$/,
          loader: 'url-loader?emitFile=false',
        },

        {
          test: /\.svg$/,
          loader: 'ignore-loader',
        },
      ],
    },
    // optimization: {
    //   minimize: true,
    //   minimizer: [
    //     new TerserPlugin({
    //       sourceMap: true,
    //       terserOptions: {
    //         output: {
    //           comments: false,
    //         },
    //       },
    //       extractComments: false,
    //     }),
    //   ],
    // },
    plugins: [
      new webpack.DefinePlugin(env.forWebpackDefinePlugin),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new ManifestPlugin({
        fileName: 'asset-manifest.json',
      }),
    ],
  },
];
