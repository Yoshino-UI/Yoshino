import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';
import ApiBox from '../../components/ApiBox/';
import Api from './api';

import SliderDemo from './demo/sliderDemo';
import * as sliderDemoMd from './demo/sliderDemo.md';
const sliderDemoCode = require('!raw-loader!./demo/sliderDemo');

import SliderCustom from './demo/sliderCustom';
import * as sliderCustomMd from './demo/sliderCustom.md';
const sliderCustomCode = require('!raw-loader!./demo/sliderCustom');

import SliderDisabled from './demo/sliderDisabled';
import * as sliderDisabledMd from './demo/sliderDisabled.md';
const sliderDisabledCode = require('!raw-loader!./demo/sliderDisabled');

export default class SliderPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={sliderDemoMd} demo={<SliderDemo/>} code={sliderDemoCode}/>

        <CodeBox text={sliderDisabledMd} demo={<SliderDisabled/>} code={sliderDisabledCode}/>

        <CodeBox text={sliderCustomMd} demo={<SliderCustom/>} code={sliderCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
