const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
var WebpackPwaManifest = require('webpack-pwa-manifest');
const webpack = require('webpack');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const PUBLIC_PATH = 'https://food-delivery-7d366.firebaseapp.com/';
const isDevelopment = process.env.NODE_ENV !== 'production';
module.exports = type => {
  const plugins = [
    new HtmlWebpackPlugin({
      title: 'Food Delivery',
      template: 'assets/index.html',
      favicon: 'assets/favicon.ico',
      cache: true
    })
  ];

  if (isDevelopment) {
    plugins.push(new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin());
  } else {
    plugins.push(
      new FriendlyErrorsWebpackPlugin(),
      //   new CompressionPlugin(),
      new MinifyPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].' + language + '.css',
        chunkFilename: '[id].' + language + '.css',
        filename: `static/css/[name].[contenthash].css`,
        chunkFilename: `static/css/[id].[contenthash].css`
      }),
      new WorkboxPlugin.GenerateSW({
        // these options encourage the ServiceWorkers to get in there fast
        // and not allow any straggling "old" SWs to hang around
        swDest: 'sw.js',
        clientsClaim: true,
        skipWaiting: true
      }),
      //   webpack.optimize.DedupePlugin
      new WebpackPwaManifest({
        name: 'Food Delivery',
        short_name: 'Food Delivery',
        filename: 'manifest.json',
        description: 'Food Delivery React App',
        start_url: './index.html',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#f0f2f5',
        theme_color: '#FF7714',
        icons: [
          {
            src: path.resolve('assets/react.png'),
            sizes: [96, 128, 192, 256, 384, 512]
          }
        ]
      }),
      new SWPrecacheWebpackPlugin({
        cacheId: 'Food-Delivery',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'serviceWorker.js',
        minify: true,
        navigateFallback: PUBLIC_PATH,
        staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
      }),
      new HtmlWebpackPlugin({
        meta: {
          viewport: 'width=device-width, initial-scale=1,viewport-fit=cover, shrink-to-fit=no',
          'theme-color': '#FF7714',
          'apple-mobile-web-app-status-bar-style': '#FF7714',
          'og:title': 'Food Delivery',
          'og:description': 'A simple Boilerplate of React Js',
          'content-type': { 'http-equiv': 'content-type', content: 'text/html; charset=UTF-8' }
        },
        title: 'Food',
        template: 'assets/index.html',
        minify: true,
        minify: {
          collapseWhitespace: true
        }
      }),
      new HtmlWebpackRootPlugin('root')
    );
  }
  return {
    plugins
  };
};
