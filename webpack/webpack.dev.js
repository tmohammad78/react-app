const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const commonVariables = require('./commonVariables');

const PORT = process.env.PORT || 3000;
module.exports = Object.keys(commonVariables.languages).map(function(language) {
  return {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
      app: [
        'core-js/stable',
        'regenerator-runtime/runtime',
        // "webpack-hot-middleware/client",
        // "react-hot-loader/patch",
        `${commonVariables.appEntry}/index.js`
      ]
    },
    output: {
      chunkFilename: `[name].${language}.js`
    },
    module: {
      rules: [
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
                data: `$pageDirection: '${commonVariables.languages[language]['langDirection']}';`,
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
    devServer: {
      host: 'localhost',
      port: PORT,
      historyApiFallback: true,
      // hot: true,
      open: true
    }
  };
});
