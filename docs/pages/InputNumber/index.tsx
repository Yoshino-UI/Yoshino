import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';
import ApiBox from '../../components/ApiBox/';
import Api from './api';

import InputNumberDemo from './demo/inputNumberDemo';
import * as inputNumberDemoMd from './demo/inputNumberDemo.md';
const inputNumberDemoCode = require('!raw-loader!./demo/inputNumberDemo');

export default class InputNumberPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={inputNumberDemoMd} demo={<InputNumberDemo/>} code={inputNumberDemoCode}/>

        <ApiBox api={Api}/>
      </div>
    );
  }
}
