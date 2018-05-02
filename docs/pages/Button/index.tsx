import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';
import ApiBox from '../../components/ApiBox/';
import Api from './api';

import ButtonTypeDemo from './demo/buttonType';
import * as buttonTypeMd from './demo/buttonType.md';
const buttonTypeCode = require('!raw-loader!./demo/buttonType');

import ButtonIconDemo from './demo/buttonIcon';
import * as buttonIconMd from './demo/buttonIcon.md';
const buttonIconCode = require('!raw-loader!./demo/buttonIcon');

import ButtonLoadingDemo from './demo/buttonLoading';
import * as buttonLoadingMd from './demo/buttonLoading.md';
const buttonLoadingCode = require('!raw-loader!./demo/buttonLoading');

import ButtonGhostDemo from './demo/buttonGhost';
import * as buttonGhostMd from './demo/buttonGhost.md';
const buttonGhostCode = require('!raw-loader!./demo/buttonGhost');

import ButtonDisabledDemo from './demo/buttonDisabled';
import * as buttonDisabledMd from './demo/buttonDisabled.md';
const buttonDisabledCode = require('!raw-loader!./demo/buttonDisabled');

export default class ButtonPage extends Component {
  render() {
    return (
      <div className="">
        <Markdown text={md}/>
        <CodeBox text={buttonTypeMd} demo={<ButtonTypeDemo/>} code={buttonTypeCode}/>

        <CodeBox text={buttonIconMd} demo={<ButtonIconDemo/>} code={buttonIconCode}/>

        <CodeBox text={buttonLoadingMd} demo={<ButtonLoadingDemo/>} code={buttonLoadingCode}/>

        <CodeBox text={buttonGhostMd} demo={<ButtonGhostDemo/>} code={buttonGhostCode}/>

        <CodeBox text={buttonDisabledMd} demo={<ButtonDisabledDemo/>} code={buttonDisabledCode}/>

        <ApiBox api={Api}/>
      </div>
    )
  }
};
