const commons = require("./webpack.config.commons");
const a = require("./webpack.config.a.js");
const b = require("./webpack.config.b.js");
const c = require("./webpack.config.c.js");

module.exports = [commons, a, b, c];