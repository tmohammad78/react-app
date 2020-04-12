const path = require('path');
const PROJECT_ROOT = path.resolve(__dirname, '../');

const LANGUAGES = {
  fa: require('../src/i18n/fa.json'),
  en: require('../src/i18n/en.json'),
};

module.exports = {
  languages: LANGUAGES,
  projectRoot: PROJECT_ROOT,
  outputPath: path.join(PROJECT_ROOT, 'dist'),
  publicPath: `/dist/`,
  appEntry: path.join(PROJECT_ROOT, 'src'),
};
