import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import TimePickerDemo from './demo/timePickerDemo';
import * as timePickerDemoMd from './demo/timePickerDemo.md';
const timePickerDemoCode = require('!raw-loader!./demo/timePickerDemo');

import TimePickerCustom from './demo/timePickerCustom';
import * as timePickerCustomMd from './demo/timePickerCustom.md';
const timePickerCustomCode = require('!raw-loader!./demo/timePickerCustom');

export default class TimePickerPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={timePickerDemoMd} demo={<TimePickerDemo/>} code={timePickerDemoCode}/>

        <CodeBox text={timePickerCustomMd} demo={<TimePickerCustom/>} code={timePickerCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
