const isProduction = process.env.NODE_ENV === 'production';
const entry = [];
if (!isProduction) {
  entry.push(
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&reload=true',
    'react-hot-loader/patch',
    './src/index.js'
  );
} else {
  entry.push('./src/index.js');
}
module.exports = entry;
