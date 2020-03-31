const modules = require('./module');
const plugins = require('./plugins');
const resolve = require('./resolve');
const optimization = require('./optimization');
const devtool = require('./devtool');
const entry = require('./entry');
const output = require('./output');
module.exports = { modules, plugins, entry, output, resolve, optimization, devtool };
