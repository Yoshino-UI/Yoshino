import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import TagDemo from './demo/tagDemo';
import * as tagDemoMd from './demo/tagDemo.md';
const tagDemoCode = require('!raw-loader!./demo/tagDemo');

import TagCustom from './demo/tagCustom';
import * as tagCustomMd from './demo/tagCustom.md';
const tagCustomCode = require('!raw-loader!./demo/tagCustom');

export default class TagPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={tagDemoMd} demo={<TagDemo/>} code={tagDemoCode}/>

        <CodeBox text={tagCustomMd} demo={<TagCustom/>} code={tagCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
