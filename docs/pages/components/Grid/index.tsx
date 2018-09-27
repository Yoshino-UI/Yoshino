import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '@docs/components/Markdown/';
import CodeBox from '@docs/components/CodeBox/';
import ApiBox from '@docs/components/ApiBox/';
import Api from './api';

import GridDemo from './demo/gridDemo';
import * as gridDemoMd from './demo/gridDemo.md';
const gridDemoCode = require('!raw-loader!./demo/gridDemo');

import GridCustom from './demo/gridCustom';
import * as gridCustomMd from './demo/gridCustom.md';
const gridCustomCode = require('!raw-loader!./demo/gridCustom');

import GridOrder from './demo/gridOrder';
import * as gridOrderMd from './demo/gridOrder.md';
const gridOrderCode = require('!raw-loader!./demo/gridOrder');

import GridFlex from './demo/gridFlex';
import * as gridFlexMd from './demo/gridFlex.md';
const gridFlexCode = require('!raw-loader!./demo/gridFlex');

import GridFlexVertical from './demo/gridFlexVertical';
import * as gridFlexVerticalMd from './demo/gridFlexVertical.md';
const gridFlexVerticalCode = require('!raw-loader!./demo/gridFlexVertical');

import GridFlexOrder from './demo/gridFlexOrder';
import * as gridFlexOrderMd from './demo/gridFlexOrder.md';
const gridFlexOrderCode = require('!raw-loader!./demo/gridFlexOrder');

import GridOther from './demo/gridOther';
import * as gridOtherMd from './demo/gridOther.md';
const gridOtherCode = require('!raw-loader!./demo/gridOther');

import GridConfig from './demo/gridConfig';
import * as gridConfigMd from './demo/gridConfig.md';
const gridConfigCode = require('!raw-loader!./demo/gridConfig');

import './index.less';

export default class GridPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={gridDemoMd} demo={<GridDemo/>} code={gridDemoCode}/>

        <CodeBox text={gridCustomMd} demo={<GridCustom/>} code={gridCustomCode}/>

        <CodeBox text={gridOrderMd} demo={<GridOrder/>} code={gridOrderCode}/>

        <CodeBox text={gridFlexMd} demo={<GridFlex/>} code={gridFlexCode}/>

        <CodeBox text={gridFlexVerticalMd} demo={<GridFlexVertical/>} code={gridFlexVerticalCode}/>

        <CodeBox text={gridFlexOrderMd} demo={<GridFlexOrder/>} code={gridFlexOrderCode}/>

        <CodeBox text={gridOtherMd} demo={<GridOther/>} code={gridOtherCode}/>

        <CodeBox text={gridConfigMd} demo={<GridConfig/>} code={gridConfigCode}/>

        <ApiBox api={Api}/>
      </div>
    );
  }
}
