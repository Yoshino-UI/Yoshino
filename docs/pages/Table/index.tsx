import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';
import ApiBox from '../../components/ApiBox/';
import Api from './api';

import TableDemo from './demo/tableDemo';
import * as tableDemoMd from './demo/tableDemo.md';
const tableDemoCode = require('!raw-loader!./demo/tableDemo');

import TableCustom from './demo/tableCustom';
import * as tableCustomMd from './demo/tableCustom.md';
const tableCustomCode = require('!raw-loader!./demo/tableCustom');

export default class TablePage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={tableDemoMd} demo={<TableDemo/>} code={tableDemoCode}/>

        <CodeBox text={tableCustomMd} demo={<TableCustom/>} code={tableCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    )
  }
};
  
