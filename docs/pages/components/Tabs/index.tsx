import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import TabsDemo from './demo/tabsDemo';
import * as tabsDemoMd from './demo/tabsDemo.md';
const tabsDemoCode = require('!raw-loader!./demo/tabsDemo');

import TabsCustom from './demo/tabsCustom';
import * as tabsCustomMd from './demo/tabsCustom.md';
const tabsCustomCode = require('!raw-loader!./demo/tabsCustom');

export default class TabsPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={tabsDemoMd} demo={<TabsDemo/>} code={tabsDemoCode}/>

        <CodeBox text={tabsCustomMd} demo={<TabsCustom/>} code={tabsCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
