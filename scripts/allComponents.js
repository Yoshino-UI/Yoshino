const path = require('path');
const fs = require('fs');

// 组件目录
const componentsPath = path.resolve(__dirname, '../components/');

const dir = fs.readdirSync(componentsPath);
const dirSet = new Set(dir);

// 删除非组件目录
dirSet.delete('styles');
dirSet.delete('template');
dirSet.delete('utils');
dirSet.delete('.DS_Store');
dirSet.delete('index.tsx');

const arr =  Array.from(dirSet);

module.exports = arr;