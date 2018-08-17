// 用于快速新建组件说明
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
  fs.writeFileSync(path.resolve(`docs/pages/${component}`, fileName), content, {
    encoding: 'utf8',
  })
}



function fileDocsTsx(component) {
  const low = capitalizeFirstLetter(component); // 小写
  const content = `import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';
import ApiBox from '../../components/ApiBox/';
import Api from './api';

import ${component}Demo from './demo/${low}Demo';
import * as ${low}DemoMd from './demo/${low}Demo.md';
const ${low}DemoCode = require('!raw-loader!./demo/${low}Demo');

import ${component}Custom from './demo/${low}Custom';
import * as ${low}CustomMd from './demo/${low}Custom.md';
const ${low}CustomCode = require('!raw-loader!./demo/${low}Custom');

export default class ${component}Page extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={${low}DemoMd} demo={<${component}Demo/>} code={${low}DemoCode}/>

        <CodeBox text={${low}CustomMd} demo={<${component}Custom/>} code={${low}CustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
`;
  writeFile(`index.tsx`, content, component);
}

function fileReadmeMd(component) {
  const content = `## ${component} 


## 代码演示
`;
  writeFile('index.md', content, component);
}

function fileApiTsx(component) {
  const content = `export default [
  {
    title: 'API',
    json: [
      {
        props: '',
        intro: '',
        type: '',
        defaultValue: '',
      },
      {
        props: '',
        intro: '',
        type: '',
        defaultValue: '',
      },
      {
        props: '',
        intro: '',
        type: '',
        defaultValue: '',
      },
      {
        props: '',
        intro: '',
        type: '',
        defaultValue: '',
      },
      {
        props: '',
        intro: '',
        type: '',
        defaultValue: '',
      },
      {
        props: '',
        intro: '',
        type: '',
        defaultValue: '',
      },
    ]
  }
];
`;
  writeFile('api.tsx', content, component);
}


function demoReadmeMd(component) {
  const low = capitalizeFirstLetter(component); // 小写
  const content = `#### 
`;
  writeFile(`demo/${low}Demo.md`, content, component);
  writeFile(`demo/${low}Custom.md`, content, component);
}

function demoTsx(component) {
  const low = capitalizeFirstLetter(component); // 小写
  const content = `import * as React from 'react';
import { ${component} } from '../../../../components/';

export default function() {
  return (
    <div>
      <${component}/>
      <${component}/>
    </div>
  );
}
`;
  writeFile(`demo/${low}Demo.tsx`, content, component);
  writeFile(`demo/${low}Custom.tsx`, content, component);
}




// 从命令行参数中读取组件名称
const component = process.argv[2];

// 校验
assert(component, `
组件名称不能为空，请带上组件名称：
npm run new ComponentName
`);
assert(!fs.existsSync(path.resolve('./docs/pages/', component)), `
${component} 组件说明已经存在！
`);

// 生成文件
fs.mkdirSync(path.resolve('./docs/pages/', component));
fs.mkdirSync(path.resolve('./docs/pages/', component, 'demo'));
fileDocsTsx(component);
fileReadmeMd(component);
fileApiTsx(component);
demoReadmeMd(component);
demoTsx(component);

console.info(`组件说明成功添加到 ./docs/pages/${component} 目录下。`);

