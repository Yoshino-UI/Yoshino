import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import CarouselDemo from './demo/carouselDemo';
import * as carouselDemoMd from './demo/carouselDemo.md';
const carouselDemoCode = require('!raw-loader!./demo/carouselDemo');

import CarouselCustom from './demo/carouselCustom';
import * as carouselCustomMd from './demo/carouselCustom.md';
const carouselCustomCode = require('!raw-loader!./demo/carouselCustom');

import './index.less';

export default class CarouselPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={carouselDemoMd} demo={<CarouselDemo/>} code={carouselDemoCode}/>

        <CodeBox text={carouselCustomMd} demo={<CarouselCustom/>} code={carouselCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
