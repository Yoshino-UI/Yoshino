import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';
import ApiBox from '../../components/ApiBox/';
import Api from './api';

import MessageDemo from './demo/messageDemo';
import * as messageDemoMd from './demo/messageDemo.md';
const messageDemoCode = require('!raw-loader!./demo/messageDemo');

// import MessageCustom from './demo/messageCustom';
// import * as messageCustomMd from './demo/messageCustom.md';
// const messageCustomCode = require('!raw-loader!./demo/messageCustom');

export default class MessagePage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={messageDemoMd} demo={<MessageDemo/>} code={messageDemoCode}/>

        {/* <CodeBox text={messageCustomMd} demo={<MessageCustom/>} code={messageCustomCode}/> */}
        <ApiBox api={Api}/>
      </div>
    );
  }
};
  
