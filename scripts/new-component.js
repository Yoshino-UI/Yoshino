// 用于快速新建组件
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const {execSync} = require('child_process');

// 首字母小写
function capitalizeFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

// 写文件
function writeFile(fileName, content, component) {
  fs.writeFileSync(path.resolve(`components/${component}`, fileName), content, {
    encoding: 'utf8',
  })
}

function fileIndexScss(component) {
  const name = capitalizeFirstLetter(component);
  const path = `${component}/style`;
  const content = `@import './var.less';

@${name}-prefix-cls: ~"@{css-prefix}-${name}";

.@{${name}-prefix-cls} {

}
`;
  writeFile('index.less', content, path);
  const varLess = `@import '../../styles/var.less';`;
  writeFile('var.less', varLess, path);
}

function fileIndexJs(component) {
  const path = `${component}/style`;
  const content = `import './index.css';`;
  writeFile('index.js', content, path);
  const LessContent = `import './index.less;`;
  writeFile('less.js', LessContent, path);
}

function addImportLess(component) {
  const content = fs.readFileSync(path.resolve(`components/styles/components.less`), {
    encoding: 'utf8',
  });
  const str = content + `
@import '../${component}/style/index';`;
  fs.writeFileSync(path.resolve(`components/styles/components.less`), str, {
    encoding: 'utf8',
  })
}

function fileIndexTsx(component) {
  const content = `import ${component} from './${component}';

export default ${component};
`;
  writeFile('index.tsx', content, component);
}

function fileComponentTsx(component) {
  const content = `
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';

export interface I${component}Props extends IBaseComponent {

}

export interface I${component}State {

}

/**
 * **组件中文名称**-组件描述。
 */
export class ${component} extends Component<I${component}Props, I${component}State> {
  preCls = 'yoshino-${capitalizeFirstLetter(component)}';

  static defaultProps = {
  };

  render() {
    const {
      className, style,
      ...otherProps} = this.props;
    const preCls = this.preCls;
    const clsName = classNames(
      preCls, className,
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
      ${component}
      </div>
    );
  }
}

export default ${component};
`;
  writeFile(`${component}.tsx`, content, component);
}

function fileTests(component) {
  const content = `import * as renderer from 'react-test-renderer';
import * as React from 'react';
import ${component} from '../index';

describe('Props', () => {

  test('默认', () => {
    const component = renderer.create(
      <${component}/>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
`;
  writeFile('__tests__/props.test.tsx', content, component);
}

function fileE2ETests(component) {
  const content = `import * as React from 'react';
import {Simulate, renderIntoDocument, scryRenderedComponentsWithType} from 'react-dom/test-utils';
import {findDOMNode} from 'react-dom';
import ${component} from '../index';

describe('多选', () => {
  test('点击其中一个选项后可通过 onChange 拿到最新的值', () => {
    const component = renderIntoDocument(
      <${component}/>,
    ) as ${component};
  });
});
`;
  writeFile('__tests__/e2e.test.tsx', content, component);
}

// 从命令行参数中读取组件名称
const component = process.argv[2];

// 校验
assert(component, `
组件名称不能为空，请带上组件名称：
npm run new ComponentName
`);
assert(!fs.existsSync(path.resolve('components', component)), `
${component} 组件已经存在！
`);

// 生成文件
fs.mkdirSync(path.resolve('components', component));
fs.mkdirSync(path.resolve('components', component, 'style'));
fs.mkdirSync(path.resolve('components', component, '__tests__'));
fileIndexScss(component);
fileIndexJs(component);
addImportLess(component);
fileComponentTsx(component);
fileIndexTsx(component);
fileTests(component);
fileE2ETests(component);

console.info(`组件成功添加到 ./components/${component} 目录下。`);

// 更新index.tsx
const updateEntry = path.resolve(__dirname, './updateEntry.js');
console.log('开始更新组件库入口文件');
execSync(`node ${updateEntry}`);
console.log('完成更新组件库入口文件');

const newDocs = path.resolve(__dirname, './new-docs.js');
execSync(`node ${newDocs} ${component}`);


