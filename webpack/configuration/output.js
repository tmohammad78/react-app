// Dependencies
const path = require('path');
module.exports =  type => {
  if (type === 'server') {
    return {
      filename: 'server.js',
      chunkFilename: `[name].[chunkhash:8].js`,
      path: path.resolve(__dirname, '../../dist'),
      libraryTarget: 'commonjs2'
    };
  }

  return {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../../public/app'),
    publicPath: '/'
  };
};
