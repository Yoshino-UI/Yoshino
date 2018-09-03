import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import HelpersDemo from './demo/helpersDemo';
import * as helpersDemoMd from './demo/helpersDemo.md';
const helpersDemoCode = require('!raw-loader!./demo/helpersDemo');

// import HelpersCustom from './demo/helpersCustom';
// import * as helpersCustomMd from './demo/helpersCustom.md';
// const helpersCustomCode = require('!raw-loader!./demo/helpersCustom');

export default class HelpersPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={helpersDemoMd} demo={<HelpersDemo/>} code={helpersDemoCode}/>

        {/* <CodeBox text={helpersCustomMd} demo={<HelpersCustom/>} code={helpersCustomCode}/> */}
        <ApiBox api={Api}/>
      </div>
    );
  }
}
