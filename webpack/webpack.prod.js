const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const commonVariables = require('./commonVariables');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
var WebpackPwaManifest = require('webpack-pwa-manifest');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const PUBLIC_PATH = 'https://food-delivery-7d366.firebaseapp.com/';
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = Object.keys(commonVariables.languages).map(function (language) {
  return {
    mode: 'production',
    devtool: 'source-map',
    target: 'node',
    entry: {
      app: [
        // 'core-js/stable',
        // 'regenerator-runtime/runtime',
        // `${commonVariables.appEntry}/index.js`,
        path.resolve(__dirname, '../src/server/server.ts'),
      ],
    },
    output: {
      filename: 'bundle.js',
      chunkFilename: `[name].[chunkhash:8].js`,
      path: path.resolve(__dirname, '../dist'),
    },
    externals: [webpackNodeExternals()],
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
                importLoaders: 2, // the loader that should acaive before css loader
                esModule: true,
                sourceMap: true, // because if it true it increase bundle size
                modules: {
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
              },
            },
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
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sassOptions: {
                  outputStyle: 'compressed',
                },
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
    // devServer: {
    //   historyApiFallback: true,
    // },

    plugins: [
      //   new BundleAnalyzerPlugin(),
      new FriendlyErrorsWebpackPlugin(),
      new LoadablePlugin(),
      //   new CompressionPlugin(),
      new MinifyPlugin(),
      new MiniCssExtractPlugin({
        // filename: '[name].fa.css',
        // chunkFilename: '[id].fa.css',
        filename: `static/css/[name].[contenthash].css`,
        chunkFilename: `static/css/[id].[contenthash].css`,
      }),
        // new WorkboxPlugin.GenerateSW({
        //   // these options encourage the ServiceWorkers to get in there fast
        //   // and not allow any straggling "old" SWs to hang around
        //   swDest: 'sw.js',
        //   clientsClaim: true,
        //   skipWaiting: true,
        // }),
      //   //   webpack.optimize.DedupePlugin
      //   new WebpackPwaManifest({
      //     name: 'Food Delivery',
      //     short_name: 'Food Delivery',
      //     filename: 'manifest.json',
      //     description: 'Food Delivery React App',
      //     start_url: './index.html',
      //     display: 'standalone',
      //     orientation: 'portrait',
      //     background_color: '#f0f2f5',
      //     theme_color: '#FF7714',
      //     icons: [
      //       {
      //         src: path.resolve('assets/react.png'),
      //         sizes: [96, 128, 192, 256, 384, 512],
      //       },
      //     ],
      //   }),
      //   new SWPrecacheWebpackPlugin({
      //     cacheId: 'Food-Delivery',
      //     dontCacheBustUrlsMatching: /\.\w{8}\./,
      //     filename: 'serviceWorker.js',
      //     minify: true,
      //     navigateFallback: PUBLIC_PATH,
      //     staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/],
      //   }),
    ],
  };
});

// new HtmlWebpackRootPlugin('root'),
//   new HtmlWebpackPlugin({
//     meta: {
//       viewport: 'width=device-width, initial-scale=1,viewport-fit=cover, shrink-to-fit=no',
//       'theme-color': '#FF7714',
//       'apple-mobile-web-app-status-bar-style': '#FF7714',
//       'og:title': 'Food Delivery',
//       'og:description': 'A simple Boilerplate of React Js',
//       'content-type': { 'http-equiv': 'content-type', content: 'text/html; charset=UTF-8' }
//     },
//     title: 'Food',
//     template: 'assets/index.html',
//     minify: true,
//     minify: {
//       collapseWhitespace: true
//     }
//   }),
