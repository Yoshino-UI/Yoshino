import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import RadioDemo from './demo/radioDemo';
import * as radioDemoMd from './demo/radioDemo.md';
const radioDemoCode = require('!raw-loader!./demo/radioDemo');

import RadioCustom from './demo/radioCustom';
import * as radioCustomMd from './demo/radioCustom.md';
const radioCustomCode = require('!raw-loader!./demo/radioCustom');

export default class RadioPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={radioDemoMd} demo={<RadioDemo/>} code={radioDemoCode}/>

        <CodeBox text={radioCustomMd} demo={<RadioCustom/>} code={radioCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
