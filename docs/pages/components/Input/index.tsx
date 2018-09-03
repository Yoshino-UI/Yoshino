import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import InputDemo from './demo/inputDemo';
import * as inputDemoMd from './demo/inputDemo.md';
const inputDemoCode = require('!raw-loader!./demo/inputDemo');

import InputCustom from './demo/inputCustom';
import * as inputCustomMd from './demo/inputCustom.md';
const inputCustomCode = require('!raw-loader!./demo/inputCustom');

export default class InputPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={inputDemoMd} demo={<InputDemo/>} code={inputDemoCode}/>

        <CodeBox text={inputCustomMd} demo={<InputCustom/>} code={inputCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
