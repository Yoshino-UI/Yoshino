import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';
import ApiBox from '../../components/ApiBox/';
import Api from './api';

import MenuDemo from './demo/menuDemo';
import * as menuDemoMd from './demo/menuDemo.md';
const menuDemoCode = require('!raw-loader!./demo/menuDemo');

export default class MenuPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={menuDemoMd} demo={<MenuDemo/>} code={menuDemoCode}/>

        <ApiBox api={Api}/>
      </div>
    );
  }
}
