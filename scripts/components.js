const path = require('path');
const fs = require('fs');

// 组件目录
const componentsPath = path.resolve(__dirname, '../components/');

// 删除index.tsx
if (fs.existsSync(path.resolve(componentsPath, './index.tsx'))) {
  fs.unlink(path.resolve(componentsPath, './index.tsx'));
}

const dir = fs.readdirSync(componentsPath);
const dirSet = new Set(dir);
// 删除非组件目录
dirSet.delete('styles');
dirSet.delete('template');
dirSet.delete('utils');

// 生成webpack entry配置
const arr = Array.from(dirSet);
const components = {};
arr.forEach((item) => {
  components[`components/${item}`] = path.resolve(componentsPath, `./${item}`);
})

// 生成index.tsx
let importStr = '';
let exportStr = `module.exports = {\r\n`;
arr.forEach((item) => {
  importStr += `import ${item} from './${item}';\r\n`;
  exportStr += `  ${item},\r\n`;
})
importStr += `\r\n`;
exportStr += `  };\r\n`;
fs.writeFileSync(path.resolve(componentsPath, './index.tsx'), importStr + exportStr);

components['yoshino'] = path.resolve(componentsPath, './index.tsx');
module.exports = components;