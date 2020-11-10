const chalk = require('chalk');
const webpackMerge = require('webpack-merge');
// const buildValidations = require('./webpack/buildValidations');
const commonConfig = require('./webpack/webpack.common');

//process.traceDeprecation = true;  // <- Open an issue on the plugin's (or loader's) repository and include the stacktrace so its author could identify what is causing the warning.
// warning: DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
process.noDeprecation = true;

module.exports = env => {
	if (!env) {
		throw new Error('You must pass an --env.mode flag into your build for webpack to work!');
	}

	const envConfig = require(`./webpack/webpack.${env.mode}.js`);

	const mergedConfig = envConfig[0]; //merge file of webpack

	console.log(chalk.blue(JSON.stringify(mergedConfig)));

	return mergedConfig;
};
