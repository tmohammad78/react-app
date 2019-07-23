const path = require('path');

const APP_BUILD_VERSION = "d-1";

const PROJECT_ROOT = path.resolve(__dirname, '../');

const LANGUAGES = {
  "fa": require("../src/i18n/fa.json"),
  "en": require("../src/i18n/en.json")
};

module.exports = {
  appVersion: APP_BUILD_VERSION,
  languages: LANGUAGES, 
  projectRoot: PROJECT_ROOT,
  outputPath: path.join(PROJECT_ROOT, 'dist', APP_BUILD_VERSION),
  publicPath: `/dist/${APP_BUILD_VERSION}/`,
  appEntry: path.join(PROJECT_ROOT, 'src')
};