/**
 * If running on Nodejs 5.x and below, we load the transpiled code.
 * Otherwise, we use the ES6 code.
 * We are deprecating support for Node.js v5.x and below.
 */

  module.exports = require('./tele/telegram');

