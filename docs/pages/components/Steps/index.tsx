import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import StepsDemo from './demo/stepsDemo';
import * as stepsDemoMd from './demo/stepsDemo.md';
const stepsDemoCode = require('!raw-loader!./demo/stepsDemo');

import StepsCustom from './demo/stepsCustom';
import * as stepsCustomMd from './demo/stepsCustom.md';
const stepsCustomCode = require('!raw-loader!./demo/stepsCustom');

import StepsVertical from './demo/stepsVertical';
import * as stepsVerticalMd from './demo/stepsVertical.md';
const stepsVerticalCode = require('!raw-loader!./demo/stepsVertical');

import StepsError from './demo/stepsError';
import * as stepsErrorMd from './demo/stepsError.md';
const stepsErrorCode = require('!raw-loader!./demo/stepsError');

export default class StepsPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={stepsDemoMd} demo={<StepsDemo/>} code={stepsDemoCode}/>

        <CodeBox text={stepsCustomMd} demo={<StepsCustom/>} code={stepsCustomCode}/>

        <CodeBox text={stepsVerticalMd} demo={<StepsVertical/>} code={stepsVerticalCode}/>

        <CodeBox text={stepsErrorMd} demo={<StepsError/>} code={stepsErrorCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
