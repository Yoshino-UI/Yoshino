import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';
import ApiBox from '../../components/ApiBox/';
import Api from './api';

import ModalDemo from './demo/modalDemo';
import * as modalDemoMd from './demo/modalDemo.md';
const modalDemoCode = require('!raw-loader!./demo/modalDemo');

import ModalCustom from './demo/modalCustom';
import * as modalCustomMd from './demo/modalCustom.md';
const modalCustomCode = require('!raw-loader!./demo/modalCustom');

import ModalInner from './demo/modalInner';
import * as modalInnerMd from './demo/modalInner.md';
const modalInnerCode = require('!raw-loader!./demo/modalInner');

export default class ModalPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={modalDemoMd} demo={<ModalDemo/>} code={modalDemoCode}/>

        <CodeBox text={modalCustomMd} demo={<ModalCustom/>} code={modalCustomCode}/>

        <CodeBox text={modalInnerMd} demo={<ModalInner/>} code={modalInnerCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
