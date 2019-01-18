import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import FormDemo from './demo/formDemo';
import * as formDemoMd from './demo/formDemo.md';
const formDemoCode = require('!raw-loader!./demo/formDemo');

// import FormCustom from './demo/formCustom';
// import * as formCustomMd from './demo/formCustom.md';
// const formCustomCode = require('!raw-loader!./demo/formCustom');

export default class FormPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={formDemoMd} demo={<FormDemo/>} code={formDemoCode}/>

        {/* <CodeBox text={formCustomMd} demo={<FormCustom/>} code={formCustomCode}/> */}
        <ApiBox api={Api}/>
      </div>
    );
  }
}
