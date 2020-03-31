const isProduction = process.env.NODE_ENV === 'production';
const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  }
];
if (isProduction) {
  rules.push(
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: 'css-loader',
          options: {
            // minimize: true,
            sourceMap: false
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
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
          loader: 'sass-loader',
          options: {
            sourceMap: false
          }
        }
      ]
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
  );
} else {
  rules.push(
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
  );
}
module.exports =  {rules} ;
