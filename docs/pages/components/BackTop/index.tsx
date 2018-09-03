import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import BackTopDemo from './demo/backTopDemo';
import * as backTopDemoMd from './demo/backTopDemo.md';
const backTopDemoCode = require('!raw-loader!./demo/backTopDemo');

import BackTopCustom from './demo/backTopCustom';
import * as backTopCustomMd from './demo/backTopCustom.md';
const backTopCustomCode = require('!raw-loader!./demo/backTopCustom');

export default class BackTopPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={backTopDemoMd} demo={<BackTopDemo/>} code={backTopDemoCode}/>

        <CodeBox text={backTopCustomMd} demo={<BackTopCustom/>} code={backTopCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
