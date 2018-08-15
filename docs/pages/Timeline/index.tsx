import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';
import ApiBox from '../../components/ApiBox/';
import Api from './api';

import TimelineDemo from './demo/timelineDemo';
import * as timelineDemoMd from './demo/timelineDemo.md';
const timelineDemoCode = require('!raw-loader!./demo/timelineDemo');

import TimelineCustom from './demo/timelineCustom';
import * as timelineCustomMd from './demo/timelineCustom.md';
const timelineCustomCode = require('!raw-loader!./demo/timelineCustom');

export default class TimelinePage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={timelineDemoMd} demo={<TimelineDemo/>} code={timelineDemoCode}/>

        <CodeBox text={timelineCustomMd} demo={<TimelineCustom/>} code={timelineCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
