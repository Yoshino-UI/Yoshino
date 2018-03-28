
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';
import Icon from '../Icon';

export interface ILoadingProps extends IBaseComponent {
  /**
   * loading类型
   */
  type: 'a' | 'b' | 'c' | 'd';
  /**
   * 大小，默认default
   */
  size: 'small' | 'default' | 'large';
  /**
   * 加载文本
   */
  text: string | boolean;
}

export interface ILoadingState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class Loading extends Component<ILoadingProps, ILoadingState> {
  static defaultProps = {
    type: 'a',
    size: 'default',
    text: false,
  };

  render() {
    const {className, style, children, type, size, text, ...otherProps} = this.props;
    const preCls = 'yoshino-loading';
    const iconType = `load-${type}`;
    const loadSize = `${preCls}-${size}`;
    return (
      <div
        className={classNames(className, preCls, loadSize)}
        style={style}
        {...otherProps}
      >
      <span className={`${preCls}-icon`}>
        {children ? children : <Icon type={iconType}/>}
      </span>
      {
        text ? (
          <p className={`${preCls}-text`}>{typeof text === 'string' ? text : '加载中'}</p>
        ) : null
      }
      </div>
    );
  }
}

export default Loading;
