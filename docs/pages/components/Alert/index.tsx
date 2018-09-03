import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import AlertDemo from './demo/alertDemo';
import * as alertDemoMd from './demo/alertDemo.md';
const alertDemoCode = require('!raw-loader!./demo/alertDemo');

import AlertCustom from './demo/alertCustom';
import * as alertCustomMd from './demo/alertCustom.md';
const alertCustomCode = require('!raw-loader!./demo/alertCustom');

export default class AlertPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={alertDemoMd} demo={<AlertDemo/>} code={alertDemoCode}/>

        <CodeBox text={alertCustomMd} demo={<AlertCustom/>} code={alertCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
