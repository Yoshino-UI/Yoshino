import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import PaginationDemo from './demo/paginationDemo';
import * as paginationDemoMd from './demo/paginationDemo.md';
const paginationDemoCode = require('!raw-loader!./demo/paginationDemo');

import PaginationCustom from './demo/paginationCustom';
import * as paginationCustomMd from './demo/paginationCustom.md';
const paginationCustomCode = require('!raw-loader!./demo/paginationCustom');

export default class PaginationPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={paginationDemoMd} demo={<PaginationDemo/>} code={paginationDemoCode}/>

        <CodeBox text={paginationCustomMd} demo={<PaginationCustom/>} code={paginationCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
