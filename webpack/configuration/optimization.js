export default {
  splitChunks: {
    cacheGroups: {
      vendor: {
        chunks: 'initial',
        test: 'vendor',
        name: 'vendor',
        filename: 'vendor.js',
        enforce: true
      }
    }
  }
};
const isProduction = process.env.NODE_ENV === 'production';
const optimization = [
  {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          filename: 'vendor.js',
          enforce: true
        }
      }
    }
  }
];

if (isProduction) {
  optimization.push({
    concatenateModules: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  });
}
