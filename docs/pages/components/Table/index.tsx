import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import TableDemo from './demo/tableDemo';
import * as tableDemoMd from './demo/tableDemo.md';
const tableDemoCode = require('!raw-loader!./demo/tableDemo');

import TableCustom from './demo/tableCustom';
import * as tableCustomMd from './demo/tableCustom.md';
const tableCustomCode = require('!raw-loader!./demo/tableCustom');

import TableSortDemo from './demo/tableSortDemo';
import * as tableSortDemoMd from './demo/tableSortDemo.md';
const tableSortDemoCode = require('!raw-loader!./demo/tableSortDemo');

export default class TablePage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={tableDemoMd} demo={<TableDemo/>} code={tableDemoCode}/>

        <CodeBox text={tableCustomMd} demo={<TableCustom/>} code={tableCustomCode}/>

        <CodeBox text={tableSortDemoMd} demo={<TableSortDemo/>} code={tableSortDemoCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
