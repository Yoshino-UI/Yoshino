import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import SkeletonDemo from './demo/skeletonDemo';
import * as skeletonDemoMd from './demo/skeletonDemo.md';
const skeletonDemoCode = require('!raw-loader!./demo/skeletonDemo');

import SkeletonCustom from './demo/skeletonCustom';
import * as skeletonCustomMd from './demo/skeletonCustom.md';
const skeletonCustomCode = require('!raw-loader!./demo/skeletonCustom');

export default class SkeletonPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={skeletonDemoMd} demo={<SkeletonDemo/>} code={skeletonDemoCode}/>

        <CodeBox text={skeletonCustomMd} demo={<SkeletonCustom/>} code={skeletonCustomCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
