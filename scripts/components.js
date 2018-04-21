const path = require('path');
const fs = require('fs');

const dir = fs.readdirSync(path.resolve(__dirname, '../components'));

const dirSet = new Set(dir);

dirSet.delete('styles');
dirSet.delete('template');
dirSet.delete('utils');

const arr = Array.from(dirSet);

const components = {};
for (const item of arr) {
  components[item] = path.resolve(__dirname, `../components/${item}`);
}

module.exports = components;