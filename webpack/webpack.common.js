module.exports = [
  {
    entry: ['@babel/polyfill'],
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          resolve: {
            extensions: ['.js', 'jsx', '.tsx', '.ts'],
          },
          loader: 'babel-loader',
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
        },
        {
          test: /\.svg$|\.ico$/,
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
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       vendor: {
    //         chunks: 'initial',
    //         test: 'vendor',
    //         name: 'vendor',
    //         filename: 'vendor.js',
    //         enforce: true,
    //       },
    //     },
    //   },
    // },
  },
];
