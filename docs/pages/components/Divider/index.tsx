import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import DividerDemo from './demo/dividerDemo';
import * as dividerDemoMd from './demo/dividerDemo.md';
const dividerDemoCode = require('!raw-loader!./demo/dividerDemo');

import DividerCustom from './demo/dividerCustom';
import * as dividerCustomMd from './demo/dividerCustom.md';
const dividerCustomCode = require('!raw-loader!./demo/dividerCustom');

export default class DividerPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={dividerDemoMd} demo={<DividerDemo/>} code={dividerDemoCode}/>

        <CodeBox text={dividerCustomMd} demo={<DividerCustom/>} code={dividerCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
