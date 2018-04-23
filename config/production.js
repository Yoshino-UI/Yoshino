const path = require('path');
const defaultConfig = require(path.resolve(__dirname, '../webpack.config'));
const components = require(path.resolve(__dirname, '../scripts/components.js'));

module.exports = {
  mode: 'production',
  entry: {
    ...components,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../lib'),
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: 'yoshino',
  },
  ...defaultConfig,
}