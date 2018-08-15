import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';
import ApiBox from '../../components/ApiBox/';
import Api from './api';

import CollapseDemo from './demo/collapseDemo';
import * as collapseDemoMd from './demo/collapseDemo.md';
const collapseDemoCode = require('!raw-loader!./demo/collapseDemo');

import CollapseCustom from './demo/collapseCustom';
import * as collapseCustomMd from './demo/collapseCustom.md';
const collapseCustomCode = require('!raw-loader!./demo/collapseCustom');

export default class CollapsePage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={collapseDemoMd} demo={<CollapseDemo/>} code={collapseDemoCode}/>

        <CodeBox text={collapseCustomMd} demo={<CollapseCustom/>} code={collapseCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
