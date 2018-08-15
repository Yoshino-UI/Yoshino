import * as React from 'react';
import { Component } from 'react';
import * as md from './theme.md';
import Markdown from '../../components/Markdown/';
import {Alert} from '../../../components/index';

export default class Start extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <Alert
          style={{marginTop: 20}}
          type='info'
          showIcon
          title='注意：使用yoshino-cli是从GitHub拉取最新的样式变量，并不是当前的yoshino版本，当yoshio升级后需要更新本地styles。'
        />
      </div>
    );
  }
}
