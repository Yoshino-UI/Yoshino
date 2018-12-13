import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import DatePickerDemo from './demo/datePickerDemo';
import * as datePickerDemoMd from './demo/datePickerDemo.md';
const datePickerDemoCode = require('!raw-loader!./demo/datePickerDemo');

import DatePickerCustom from './demo/datePickerCustom';
import * as datePickerCustomMd from './demo/datePickerCustom.md';
const datePickerCustomCode = require('!raw-loader!./demo/datePickerCustom');

import DatePickerTime from './demo/datePickerTime';
import * as datePickerTimeMd from './demo/datePickerTime.md';
const datePickerTimeCode = require('!raw-loader!./demo/datePickerTime');

export default class DatePickerPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={datePickerDemoMd} demo={<DatePickerDemo/>} code={datePickerDemoCode}/>

        <CodeBox text={datePickerCustomMd} demo={<DatePickerCustom/>} code={datePickerCustomCode}/>

        <CodeBox text={datePickerTimeMd} demo={<DatePickerTime/>} code={datePickerTimeCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
