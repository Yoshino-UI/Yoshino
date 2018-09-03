import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import NotificationDemo from './demo/notificationDemo';
import * as notificationDemoMd from './demo/notificationDemo.md';
const notificationDemoCode = require('!raw-loader!./demo/notificationDemo');

import NotificationCustom from './demo/notificationCustom';
import * as notificationCustomMd from './demo/notificationCustom.md';
const notificationCustomCode = require('!raw-loader!./demo/notificationCustom');

export default class NotificationPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={notificationDemoMd} demo={<NotificationDemo/>} code={notificationDemoCode}/>

        <CodeBox text={notificationCustomMd} demo={<NotificationCustom/>} code={notificationCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
