
import {Component, ReactNode} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';

export interface ICardProps extends IBaseComponent {
  /**
   * 标题
   */
  title: string;
  /**
   * 更多
   */
  extra: ReactNode;
  /**
   * 边框
   */
  border?: boolean;
  /**
   * 阴影
   */
  shadow?: boolean;
}

export interface ICardState {

}

/**
 * **卡片**-用于展示一些块状信息
 */
export class Card extends Component<ICardProps, ICardState> {
  static defaultProps = {
  };

  render() {
    const {className, style, title, extra, border, shadow, ...otherProps} = this.props;
    const preCls = 'yoshino-card';
    const cardCls = {
      [`${preCls}-border`]: border,
      [`${preCls}-shadow`]: shadow,
    };
    return (
      <div
        className={classNames(className, preCls, cardCls)}
        style={style}
        {...otherProps}
      >
        <div className={`${preCls}-head`}>
          <div className={`${preCls}-title`}>{title}</div>
          <div className={`${preCls}-extra`}>{extra}</div>
        </div>
        <div className={`${preCls}-body`}>{this.props.children}</div>
      </div>
    );
  }
}

export default Card;
