import * as React from 'react';
import { Component } from 'react';
import Markdown from '../Markdown';

export interface IProps {
  title: string;
  json: Array<{
    props: string;
    intro: string;
    type: string;
    defaultValue: string;
  }>;
}

export default class ApiBox extends Component<IProps> {

  render() {
    const {json, title} = this.props;
    let md = `#### ${title}
|属性|说明|类型|默认值|
|-|-|-|-|`;
    json.forEach((item) => {
      const {props, intro, type, defaultValue} = item;
      const arr = [props, intro, type, defaultValue];
      const separate = '======';
      const str = arr.join(separate).replace(/\|/g, '&#124;').split(separate).join('|');
      md += `
|${str}|`;
    })
    return (
      <div className="api-box">
        <div className="api-box">
          <Markdown text={md}/>
        </div>
      </div>
    );
  }
};
