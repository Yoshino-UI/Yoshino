import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import TooltipDemo from './demo/tooltipDemo';
import * as tooltipDemoMd from './demo/tooltipDemo.md';
const tooltipDemoCode = require('!raw-loader!./demo/tooltipDemo');

import TooltipCustom from './demo/tooltipCustom';
import * as tooltipCustomMd from './demo/tooltipCustom.md';
const tooltipCustomCode = require('!raw-loader!./demo/tooltipCustom');

import TooltipState from './demo/tooltipState';
import * as tooltipStateMd from './demo/tooltipState.md';
const tooltipStateCode = require('!raw-loader!./demo/tooltipState');

import TooltipTrigger from './demo/tooltipTrigger';
import * as tooltipTriggerMd from './demo/tooltipTrigger.md';
const tooltipTriggerCode = require('!raw-loader!./demo/tooltipTrigger');

export default class TooltipPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={tooltipDemoMd} demo={<TooltipDemo/>} code={tooltipDemoCode}/>

        <CodeBox text={tooltipCustomMd} demo={<TooltipCustom/>} code={tooltipCustomCode}/>

        <CodeBox text={tooltipStateMd} demo={<TooltipState/>} code={tooltipStateCode}/>

        <CodeBox text={tooltipTriggerMd} demo={<TooltipTrigger/>} code={tooltipTriggerCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
