const path = require('path');
const packageJSON = require('./package.json');
const os = require('os');
const fs = require('fs');

// 组件目录
const componentsPath = path.resolve(__dirname, './components/');
const dir = fs.readdirSync(componentsPath);
const dirSet = new Set(dir);
// 删除非组件目录
dirSet.delete('styles');
dirSet.delete('template');
dirSet.delete('utils');
dirSet.delete('index.tsx');
dirSet.delete('Hover');
dirSet.delete('Ripple');
dirSet.delete('Pop');
const componentStr = Array.from(dirSet).join(',');

module.exports = {
  title: packageJSON.name,
  // 组件目录首字母大写
  components: 'components/[A-Z]*/index.tsx',
  propsParser: require('react-docgen-typescript').parse,
  getComponentPathLine(componentPath) {
    let name;
    // 提取组件名称
    if (os.platform() !== 'win32') {
      name = /components\/([A-Z]\w*)\/index\.tsx/.exec(componentPath)[1];
    } else {
      name = /components\\([A-Z]\w*)\\index\.tsx/.exec(componentPath)[1];
    }
    return `import { ${name} } from '${packageJSON.name}';`;
  },
  require: [
    path.resolve(__dirname, './components/styles/index.less'),
  ],
  sections: [
    {
      name: '介绍',
      content: 'docs/intro.md'
    },
    {
      name: '通用组件',
      components: `components/{${componentStr}}/index.tsx`,
    },
    {
      name: '特效组件',
      content: 'docs/effects.md',
      components: 'components/{Hover,Ripple}/index.tsx',
    },
  ],
};
