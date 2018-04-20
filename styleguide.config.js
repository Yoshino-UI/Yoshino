const path = require('path');
const packageJSON = require('./package.json');
const os = require('os');

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
  ],
  sections: [
    {
      name: '介绍',
      content: 'docs/intro.md'
    },
    {
      name: '通用组件',
      components: 'components/{Icon,Breadcrumb,Button,Card,Alert,Timeline,Backtop,Switch,Loading,Divider,Rate,Progress,Avatar,Badge,Tag,Input,InputNumber,Pagination,Radio,Steps,Checkbox,Slider,Tooltip,Collapse}/index.tsx',
    },
    {
      name: '特效组件',
      content: 'docs/effects.md',
      components: 'components/{Hover,Ripple}/index.tsx',
    },
  ],
};
