import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import BreadcrumbDemo from './demo/breadcrumbDemo';
import * as breadcrumbDemoMd from './demo/breadcrumbDemo.md';
const breadcrumbDemoCode = require('!raw-loader!./demo/breadcrumbDemo');

import BreadcrumbCustom from './demo/breadcrumbCustom';
import * as breadcrumbCustomMd from './demo/breadcrumbCustom.md';
const breadcrumbCustomCode = require('!raw-loader!./demo/breadcrumbCustom');

export default class BreadcrumbPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={breadcrumbDemoMd} demo={<BreadcrumbDemo/>} code={breadcrumbDemoCode}/>

        <CodeBox text={breadcrumbCustomMd} demo={<BreadcrumbCustom/>} code={breadcrumbCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
