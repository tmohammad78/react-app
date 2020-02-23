const chalk = require('chalk');
const webpackMerge = require('webpack-merge');

const buildValidations = require('./webpack/buildValidations');
const commonConfig = require('./webpack/webpack.common');

// const addons = addonsArg => {
//   let addons = [...[addonsArg]].filter(Boolean);
//   return addons.map(addonName => require(`./webpack/addons/webpack.${addonName}.js`));
// };

//process.traceDeprecation = true;  // <- Open an issue on the plugin's (or loader's) repository and include the stacktrace so its author could identify what is causing the warning.
// warning: DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
process.noDeprecation = true;

module.exports = env => {
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }

  const envConfig = require(`./webpack/webpack.${env.mode}.js`);

  const mergedConfig = webpackMerge(commonConfig[0], envConfig[0]); //merge file of webpack

  console.log(chalk.blue(JSON.stringify(mergedConfig)));

  return mergedConfig;
};
