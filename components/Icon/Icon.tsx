
import { Component } from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';

export interface IIconProps extends IBaseComponent {
  /**
   * 图标名称
   */
  type?: string;
  /**
   * 渲染svg
   */
  svg?: string;
}

export interface IIconState {

}

/**
 * **图标**-展示对应的矢量化图标。
 */
export class Icon extends Component<IIconProps, IIconState> {
  componentDidMount() {
    const id = 'yoshino-demand-load';
    if (document.getElementById(id)) {
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/ionicons@4.4.2/dist/ionicons.js';
    script.id = id;
    script.onload = () => {
      document.body.removeChild(script);
    };
    document.body.appendChild(script);
  }

  render() {
    const {className, style, type, svg, ...otherProps} = this.props;
    const preCls = 'yoshino-icon';
    const clsName = classNames(
      preCls,  `${preCls}-${type}`, className,
    );
    const pixelBug = 'padding:0px;margin:0px;border:0px;display:block;vertical-align: middle;'; // 修复3像素bug
    const html = `<ion-icon name='${type}' style='${pixelBug}'></ion-icon>`;
    return (
      <i
        className={clsName}
        style={style}
        dangerouslySetInnerHTML={{__html: svg || html}}
        {...otherProps}
      />
    );
  }
}

export default Icon;
