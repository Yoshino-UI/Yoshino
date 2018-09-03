import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import CardDemo from './demo/cardDemo';
import * as cardDemoMd from './demo/cardDemo.md';
const cardDemoCode = require('!raw-loader!./demo/cardDemo');

import CardCustom from './demo/cardCustom';
import * as cardCustomMd from './demo/cardCustom.md';
const cardCustomCode = require('!raw-loader!./demo/cardCustom');

import CardBorder from './demo/cardBorder';
import * as cardBorderMd from './demo/cardBorder.md';
const cardBorderCode = require('!raw-loader!./demo/cardBorder');

export default class CardPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={cardDemoMd} demo={<CardDemo/>} code={cardDemoCode}/>

        <CodeBox text={cardBorderMd} demo={<CardBorder/>} code={cardBorderCode}/>

        <CodeBox text={cardCustomMd} demo={<CardCustom/>} code={cardCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
