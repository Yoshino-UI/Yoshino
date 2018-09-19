import * as React from 'react';
import { Component } from 'react';
import md from './logs.md';
import logs from './logs/logs.md';

import Markdown from '@docs/components/Markdown';
import {Timeline} from '@yoshino/components/';
import './index.less';

export default class Logs extends Component {

  dealLogsString = (str: string) => {
    const arr = str.split('##');
    arr.shift(); // 去除空头
    return arr.map((item) => {
      const version = (item.match(/- \[(.*?)\]/))![1];
      return {
        version,
        content: item.replace(/- \[.*?\]/, ''),
      };
    }).reverse();
  }

  render() {
    return (
      <div className='logs-box'>
        <Markdown text={md}/>
        <div style={{marginTop: 40}}>
          <Timeline>
            {
              this.dealLogsString(logs).map((log, key) => {
                return (
                  <Timeline.Item time={<h2 dangerouslySetInnerHTML={{__html: log.version}}/>} key={key}>
                      <Markdown text={log.content}/>
                  </Timeline.Item>
                );
              })
            }
          </Timeline>
        </div>
      </div>
    );
  }
}
