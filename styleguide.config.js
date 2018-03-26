const path = require('path');
const packageJSON = require('./package.json');

module.exports = {
  title: packageJSON.name,
  // 组件目录首字母大写
  components: 'components/[A-Z]*/index.tsx',
  propsParser: require('react-docgen-typescript').parse,
  getComponentPathLine(componentPath) {
    // 提取组件名称
    const name = /components\/([A-Z]\w*)\/index\.tsx/.exec(componentPath)[1];
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
      name: '组件',
      sections: [
        {
          name: '数据展示',
          components: 'components/{CircleProgress,Icon,PreviewImage,Table}/index.tsx',
        },
      ]
    }
  ],
};
