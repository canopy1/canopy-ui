const path = require('path');

module.exports = {
  entry: {
    cjs: './.build/cjs/index.js',
    esm: './.build/esm/index.js',
    umd: './.build/umd/index.js'
  },
  mode: "production",
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: '[name].production.js',
    path: path.resolve(__dirname, '.build'),
  },
};
