import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import BadgeDemo from './demo/badgeDemo';
import * as badgeDemoMd from './demo/badgeDemo.md';
const badgeDemoCode = require('!raw-loader!./demo/badgeDemo');

import BadgeCustom from './demo/badgeCustom';
import * as badgeCustomMd from './demo/badgeCustom.md';
const badgeCustomCode = require('!raw-loader!./demo/badgeCustom');

export default class BadgePage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={badgeDemoMd} demo={<BadgeDemo/>} code={badgeDemoCode}/>

        <CodeBox text={badgeCustomMd} demo={<BadgeCustom/>} code={badgeCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
