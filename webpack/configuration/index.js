const modules = require('./module');
const plugins = require('./plugin');
const resolve = require('./resolve');

const context = require('./context');
const devtool = require('./devtool');
const entry = require('./entry');
const externals = require('./external');
const mode = require('./mode');
const name = require('./name');
const optimization = require('./optimization');
const output = require('./output');
const target = require('./target');

const c = {};
c.modules = modules;
c.plugins = plugins;
c.resolve = resolve;
c.externals = externals;
c.mode = mode;
c.context = context;
c.devtool = devtool;
c.entry = entry;
c.name = name;
c.output = output;
c.optimization = optimization;
c.target = target;
module.exports = c;
