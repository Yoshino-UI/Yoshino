
import { Component } from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Archer, { ISVG } from './utils/archer';
import svgName from './utils/name';

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
  svgHtml: string;
}

const svgTarget = 'https://unpkg.com/ionicons@4.4.2/dist/ionicons/svg/';
const svgs: ISVG = {};
svgName.forEach((svg) => {
 svgs[svg] = {
  url: `${svgTarget}${svg}.svg`,
  version: 1
 };
});

console.log(svgs);
Archer.setMax(10000);
Archer.setConfig({
  svgs
});
Archer.startPreFetch();
/**
 * **图标**-展示对应的矢量化图标。
 */
export class Icon extends Component<IIconProps, IIconState> {
  state = {
    svgHtml: ''
  };

  async componentDidMount() {
    // 不使用ionicons图标时不进行加载，提高性能
    if (!this.props.type) {
      return;
    }
    // const id = 'yoshino-demand-load';
    // if (document.getElementById(id)) {
    //   return;
    // }
    // const script = document.createElement('script');
    // script.src = 'https://unpkg.com/ionicons@4.4.2/dist/ionicons.js';
    // script.id = id;
    // script.onload = () => {
    //   document.body.removeChild(script);
    // };
    // document.body.appendChild(script);
    const svg = await Archer.downloadSvg(this.props.type);
    this.setState({
      svgHtml: svg,
    });
  }

  render() {
    const {className, style, type, svg, ...otherProps} = this.props;
    const preCls = 'yoshino-icon';
    const clsName = classNames(
      preCls, className,
      {[`${preCls}-${type}`]: !!type}
    );
    // const pixelBug = 'padding:0px;margin:0px;border:0px;display:block;vertical-align: middle;'; // 修复3像素bug
    // const html = `<ion-icon name='${type}' style='${pixelBug}'></ion-icon>`;
    return (
      <i
        className={clsName}
        style={style}
        dangerouslySetInnerHTML={{__html: svg || this.state.svgHtml}}
        {...otherProps}
      />
    );
  }
}

export default Icon;
