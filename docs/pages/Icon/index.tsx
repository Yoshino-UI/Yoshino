import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';

import IconDemo from './demo/iconDemo';
import * as iconMd from './demo/iconDemo.md';
const iconCode = require('!raw-loader!./demo/iconDemo');

import IconSearch from './demo/iconSearch';
import * as iconSearchMd from './demo/iconSearch.md';

export default class IconPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={iconMd} demo={<IconDemo/>} code={iconCode}/>

        <CodeBox text={iconSearchMd} demo={<IconSearch/>}/>
      </div>
    )
  }
};

