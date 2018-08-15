import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';
import ApiBox from '../../components/ApiBox/';
import Api from './api';

import CheckBoxDemo from './demo/checkBoxDemo';
import * as checkBoxDemoMd from './demo/checkBoxDemo.md';
const checkBoxDemoCode = require('!raw-loader!./demo/checkBoxDemo');

import CheckBoxGroup from './demo/checkBoxGroup';
import * as checkBoxGroupMd from './demo/checkBoxGroup.md';
const checkBoxGroupCode = require('!raw-loader!./demo/checkBoxGroup');

import CheckBoxControl from './demo/checkBoxControl';
import * as checkBoxControlMd from './demo/checkBoxControl.md';
const checkBoxControlCode = require('!raw-loader!./demo/checkBoxControl');

export default class CheckBoxPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={checkBoxDemoMd} demo={<CheckBoxDemo/>} code={checkBoxDemoCode}/>

        <CodeBox text={checkBoxGroupMd} demo={<CheckBoxGroup/>} code={checkBoxGroupCode}/>

        <CodeBox text={checkBoxControlMd} demo={<CheckBoxControl/>} code={checkBoxControlCode}/>

        <ApiBox api={Api}/>
      </div>
    );
  }
}
