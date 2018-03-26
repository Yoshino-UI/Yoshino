
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponentNoChildren} from '../template/component';
import '../styles/common/iconfont/ionicons.less';
import '../styles/common/reset.less';
import './index.less';

export interface IIconProps extends IBaseComponentNoChildren {
  /**
   * 图标名称
   */
  type: string;
}

export interface IIconState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class Icon extends Component<IIconProps, IIconState> {
  render() {
    const {className, style, type} = this.props;
    const preCls = 'yoshino-icon';
    return (
      <i
        className={classNames(className, preCls, `${preCls}-${type}`)}
        style={style}
      />
    );
  }
}

export default Icon;
