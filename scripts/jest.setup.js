const path = require('path');

global.requestAnimationFrame = (callback) => {
  return setTimeout(callback, 0);
};

global.cancelAnimationFrame = (num) => {
  return clearTimeout(num);
};

module.exports = {
  // 用于 Jest 忽略 SCSS 文件
  process(src, filename) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
