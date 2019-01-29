
import { Component } from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Archer from './archerConfig';

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

/**
 * **图标**-展示对应的矢量化图标。
 */
export class Icon extends Component<IIconProps, IIconState> {
  static Archer: typeof Archer;
  state = {
    svgHtml: ''
  };

  async componentDidMount() {
    // 不使用ionicons图标时不进行加载，提高性能
    if (!this.props.type) {
      return;
    }

    // tslint:disable-next-line no-any
    const svg = await Archer.downloadSvg(`${this.props.type}`);
    this.setState({
      svgHtml: svg,
    });
  }

  async componentWillReceiveProps(props: IIconProps) {
    if (!props.type) {
      return;
    }

    if (this.props.type !== props.type) {
      // tslint:disable-next-line no-any
      const svg = await Archer.downloadSvg(`${props.type}`);
      this.setState({
        svgHtml: svg,
      });
    }
  }

  render() {
    const {className, style, type, svg, ...otherProps} = this.props;
    const preCls = 'yoshino-icon';
    const clsName = classNames(
      preCls, className,
      {[`${preCls}-${type}`]: !!type}
    );
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

Icon.Archer = Archer;

export default Icon;
