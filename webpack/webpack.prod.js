const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const commonVariables = require("./commonVariables");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');


module.exports = Object.keys(commonVariables.languages).map(function(language) {
  return {
    mode: "production",
    entry: {
      app: ['core-js/stable',
      'regenerator-runtime/runtime', `${commonVariables.appEntry}/index.js`]
    },
    output: {
      chunkFilename: `[name].[chunkhash:8].js`
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                minimize: true,
                sourceMap: false
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                sourceMap: false,
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
              loader: "sass-loader",
              options: {
                data: `$pageDirection: "${
                  commonVariables.languages[language]["langDirection"]
                }";`,
                sourceMap: false
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new FriendlyErrorsWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name]." + language + ".css",
        chunkFilename: "[id]." + language + ".css"
        // filename: `static/css/[name].[contenthash].css`,
        // chunkFilename: `static/css/[id].[contenthash].css`,
      })
    ]
  };
});
