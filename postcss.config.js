module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext'),
    require('postcss-nested'),
    // require('postcss-px2rem')({ remUnit: 16 }),
    require('postcss-remove-root'),
  ],
};
