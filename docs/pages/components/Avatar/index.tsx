import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import AvatarDemo from './demo/avatarDemo';
import * as avatarDemoMd from './demo/avatarDemo.md';
const avatarDemoCode = require('!raw-loader!./demo/avatarDemo');

import AvatarCustom from './demo/avatarCustom';
import * as avatarCustomMd from './demo/avatarCustom.md';
const avatarCustomCode = require('!raw-loader!./demo/avatarCustom');

export default class AvatarPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={avatarDemoMd} demo={<AvatarDemo/>} code={avatarDemoCode}/>

        <CodeBox text={avatarCustomMd} demo={<AvatarCustom/>} code={avatarCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
