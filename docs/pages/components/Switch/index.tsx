import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import SwitchDemo from './demo/switchDemo';
import * as switchDemoMd from './demo/switchDemo.md';
const switchDemoCode = require('!raw-loader!./demo/switchDemo');

import SwitchCustom from './demo/switchCustom';
import * as switchCustomMd from './demo/switchCustom.md';
const switchCustomCode = require('!raw-loader!./demo/switchCustom');

export default class SwitchPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={switchDemoMd} demo={<SwitchDemo/>} code={switchDemoCode}/>

        <CodeBox text={switchCustomMd} demo={<SwitchCustom/>} code={switchCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
