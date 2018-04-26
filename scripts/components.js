const path = require('path');
const fs = require('fs');
const allComponents = require('./allComponents');

// 组件目录
const componentsPath = path.resolve(__dirname, '../components/');

// 删除index.tsx
if (fs.existsSync(path.resolve(componentsPath, './index.tsx'))) {
  fs.unlink(path.resolve(componentsPath, './index.tsx'));
}

// 生成webpack entry配置
const components = {};
allComponents.forEach((item) => {
  components[`components/${item}/index`] = path.resolve(componentsPath, `./${item}`);
})

// 生成index.tsx
let importStr = '';
let exportStr = `module.exports = {\r\n`;
allComponents.forEach((item) => {
  importStr += `import ${item} from './${item}';\r\n`;
  exportStr += `  ${item},\r\n`;
})
importStr += `\r\n`;
exportStr += `  };\r\n`;
fs.writeFileSync(path.resolve(componentsPath, './index.tsx'), importStr + exportStr);

components['yoshino'] = path.resolve(componentsPath, './index.tsx');
module.exports = components;