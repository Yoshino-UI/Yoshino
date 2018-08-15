import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';
import ApiBox from '../../components/ApiBox/';
import Api from './api';

import RippleDemo from './demo/rippleDemo';
import * as rippleDemoMd from './demo/rippleDemo.md';
const rippleDemoCode = require('!raw-loader!./demo/rippleDemo');

import RippleCustom from './demo/rippleCustom';
import * as rippleCustomMd from './demo/rippleCustom.md';
const rippleCustomCode = require('!raw-loader!./demo/rippleCustom');

export default class RipplePage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={rippleDemoMd} demo={<RippleDemo/>} code={rippleDemoCode}/>

        <CodeBox text={rippleCustomMd} demo={<RippleCustom/>} code={rippleCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
