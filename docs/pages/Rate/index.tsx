import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';
import ApiBox from '../../components/ApiBox/';
import Api from './api';

import RateDemo from './demo/rateDemo';
import * as rateDemoMd from './demo/rateDemo.md';
const rateDemoCode = require('!raw-loader!./demo/rateDemo');

import RateCustom from './demo/rateCustom';
import * as rateCustomMd from './demo/rateCustom.md';
const rateCustomCode = require('!raw-loader!./demo/rateCustom');

export default class RatePage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={rateDemoMd} demo={<RateDemo/>} code={rateDemoCode}/>

        <CodeBox text={rateCustomMd} demo={<RateCustom/>} code={rateCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
