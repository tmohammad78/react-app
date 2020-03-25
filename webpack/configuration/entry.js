// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';
module.exports = type => {
  if (type === 'server') {
    return './render/serverRender.js';
  }
  const entry = [];
  if (isDevelopment) {
    entry.push('webpack-hot-middleware/client', 'react-hot-loader/patch');
  }
  entry.push('./index.js');
  return entry;
};
