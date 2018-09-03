import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import ProgressDemo from './demo/progressDemo';
import * as progressDemoMd from './demo/progressDemo.md';
const progressDemoCode = require('!raw-loader!./demo/progressDemo');

export default class ProgressPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={progressDemoMd} demo={<ProgressDemo/>} code={progressDemoCode}/>

        <ApiBox api={Api}/>
      </div>
    );
  }
}
