const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const commonVariables = require('./commonVariables');
const path = require('path');

const PORT = process.env.PORT || 3000;
module.exports = [
  {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
      app: [
        // 'core-js/stable',
        // 'regenerator-runtime/runtime',
        // 'webpack-hot-middleware/client',
        // 'react-hot-loader/patch',
        `${commonVariables.appEntry}/index.tsx`,
      ],
    },
    output: {
      // chunkFilename: `[name].${language}.js`
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),

      //   path: `${commonVariables.publicPath}`,
      //   filename: 'server.js'
    },
    resolve: {
        // alias: {
        //   Components: path.resolve(__dirname, 'src/Components'),
        // //   Redux: path.resolve(__dirname, 'src/Redux'),
        // //   Pages: path.resolve(__dirname, 'src/Pages'),
        // //   Route: path.resolve(__dirname, 'src/Route'),
        // //   Helper: path.resolve(__dirname, 'src/Helper'),
        // //   Types: path.resolve(__dirname, 'src/Types'),
        // //   Config: path.resolve(__dirname, 'src/Config'),
        // },
      extensions: ['.ts', '.tsx', '.js','.json', '.jsx', '.scss', '.css'],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: [
            { loader: 'babel-loader' },
            // { loader: "eslint-loader" }
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            { loader: 'style-loader' },
            // { loader: 'css-modules-typescript-loader' },
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
                  }),
                ],
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
        // {
        //   test: /\.(png|jpe?g|gif)$/i,
        //   use: [
        //     {
        //       loader: 'file-loader',
        //       options: {
        //         name: '[path][name].[ext]'
        //       }
        //     }
        //   ]
        // },
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
    // resolve: {
    //   extensions: ['.ts', '.tsx', '.js']
    // },
    plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
    devServer: {
      host: 'localhost',
      port: PORT,
      historyApiFallback: true,
      hot: true,
      open: true,
    },
  },
];
