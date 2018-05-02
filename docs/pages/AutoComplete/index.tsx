import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';
import ApiBox from '../../components/ApiBox/';
import Api from './api';

import AutoCompleteDemo from './demo/autoCompleteDemo';
import * as autoCompleteDemoMd from './demo/autoCompleteDemo.md';
const autoCompleteDemoCode = require('!raw-loader!./demo/autoCompleteDemo');

import AutoCompleteFilter from './demo/autoCompleteFilter';
import * as autoCompleteFilterMd from './demo/autoCompleteFilter.md';
const autoCompleteFilterCode = require('!raw-loader!./demo/autoCompleteFilter');

export default class AutoCompletePage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={autoCompleteDemoMd} demo={<AutoCompleteDemo/>} code={autoCompleteDemoCode}/>

        <CodeBox text={autoCompleteFilterMd} demo={<AutoCompleteFilter/>} code={autoCompleteFilterCode}/>
        
        <ApiBox api={Api}/>
      </div>
    )
  }
};
  
