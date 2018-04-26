// 生成index.tsx
const allComponents = require('./allComponents');
const fs = require('fs');
const path = require('path');

// 组件目录
const componentsPath = path.resolve(__dirname, '../components/');

// 删除index.tsx
if (fs.existsSync(path.resolve(componentsPath, './index.tsx'))) {
  fs.unlink(path.resolve(componentsPath, './index.tsx'));
}

let importStr = '';
let exportStr = `export {\r\n`;
allComponents.forEach((item) => {
  importStr += `import ${item} from './${item}';\r\n`;
  exportStr += `  ${item},\r\n`;
})

importStr += `\r\n`;
exportStr += `  };\r\n`;
fs.writeFileSync(path.resolve(componentsPath, './index.tsx'), importStr + exportStr);