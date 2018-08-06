import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';
import ApiBox from '../../components/ApiBox/';
import Api from './api';

import SelectDemo from './demo/selectDemo';
import * as selectDemoMd from './demo/selectDemo.md';
const selectDemoCode = require('!raw-loader!./demo/selectDemo');

import SelectCustom from './demo/selectCustom';
import * as selectCustomMd from './demo/selectCustom.md';
const selectCustomCode = require('!raw-loader!./demo/selectCustom');

export default class SelectPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={selectDemoMd} demo={<SelectDemo/>} code={selectDemoCode}/>

        <CodeBox text={selectCustomMd} demo={<SelectCustom/>} code={selectCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
};
  
