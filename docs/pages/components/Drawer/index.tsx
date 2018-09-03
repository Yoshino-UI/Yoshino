import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import DrawerDemo from './demo/drawerDemo';
import * as drawerDemoMd from './demo/drawerDemo.md';
const drawerDemoCode = require('!raw-loader!./demo/drawerDemo');

// import DrawerCustom from './demo/drawerCustom';
// import * as drawerCustomMd from './demo/drawerCustom.md';
// const drawerCustomCode = require('!raw-loader!./demo/drawerCustom');

export default class DrawerPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={drawerDemoMd} demo={<DrawerDemo/>} code={drawerDemoCode}/>

        {/* <CodeBox text={drawerCustomMd} demo={<DrawerCustom/>} code={drawerCustomCode}/> */}
        <ApiBox api={Api}/>
      </div>
    );
  }
}
