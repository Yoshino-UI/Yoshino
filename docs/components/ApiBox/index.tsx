import * as React from 'react';
import { Component } from 'react';
import Markdown from '../Markdown';
import './index.less';

// tslint:disable no-any
export interface IProps {
  api: Array<{
      title: string;
      intro?: any;
      json: Array<{
        props: string;
        intro: string;
        type: string;
        defaultValue: string;
      }>;
  }>;
}

export default class ApiBox extends Component<IProps> {

  render() {
    const {api} = this.props;
    return (
      <div className='api-box'>
        {
          api.map((item, key) => {
            const {title, json, intro}  = item;
            let md = `#### ${title}\r\n${intro || ''}\r\n\r\n|属性|说明|类型|默认值|\r\n|-|-|-|-|`;
            json.forEach((item) => {
              const {props, intro, type, defaultValue} = item;
              const arr = [props, intro, type, defaultValue];
              const separate = '======';
              const str = arr.join(separate)
              .replace(/\|/g, '&#124;')
              .replace(/['|"]{1}/g, '`')
              .replace(/[\r\n]{1}/g, '')
              .split(separate).join('|');
              md += `\r\n|${str}|`;
            });
            return (
              <div className='api-box-item' key={key}>
                <Markdown text={md}/>
              </div>
            );
          })
        }
      </div>
    );
  }
}
