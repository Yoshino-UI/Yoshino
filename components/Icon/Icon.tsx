
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
  /**
   * 点击事件
   */
  onClick?: () => void;
}

export interface IIconState {

}

/**
 * **图标**-展示对应的矢量化图标。
 */
export class Icon extends Component<IIconProps, IIconState> {
  render() {
    const {className, style, type, ...otherProps} = this.props;
    const preCls = 'yoshino-icon';
    return (
      <i
        className={classNames(className, preCls, `${preCls}-${type}`)}
        style={style}
        {...otherProps}
      />
    );
  }
}

export default Icon;
