
import {Component, ReactNode} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Icon from '../Icon';

export interface IStepsItemProps extends IBaseComponent {
  /**
   * 步骤名
   */
  title: string;
  /**
   * 自定义图标
   */
  icon?: ReactNode;
  /**
   * steps方向
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * 步骤值
   */
  value?: number;
  /**
   * 大小
   */
  size?: 'default' | 'small';
  /**
   * steps的步骤值
   */
  current?: number;
  /**
   * 当前步骤状态
   */
  status?: 'error' | 'finished';
}

export interface IStepsItemDefaultProps extends IStepsItemProps {
  value: number;
  current: number;
}

export interface IStepsItemState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class StepsItem extends Component<IStepsItemProps, IStepsItemState> {
  static defaultProps = {
  };

  render() {
    const {
      className, style, title,
      direction, value, size,
      current, status, icon,
      children, ...otherProps
    } = this.props as IStepsItemDefaultProps;
    const preCls = 'yoshino-steps-item';
    const clsName = classNames(
      preCls, `${preCls}-${size}`,
      {
        [`${preCls}-process`]: current === value,
        [`${preCls}-wait`]: value > current,
        [`${preCls}-error`]: status === 'error',
      },
      className,
    );
    const stepIcon = {
      error: <Icon type='md-close'/>,
      finished: <Icon type='md-checkmark'/>,
    };
    const innerStatus = status ? status : value < current ? 'finished' : undefined;
    const text = value + 1;
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        <div className={`${preCls}-icon`}>
          {direction === 'vertical' ? <div className={`${preCls}-line-vertical`}/> : null}
          {icon ? icon : innerStatus ? stepIcon[innerStatus] : text}
        </div>
        <div className={`${preCls}-content`}>
          <span className={`${preCls}-title`}>{title}</span>
          {
            children ? (
              <p className={`${preCls}-description`}>{children}</p>
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default StepsItem;
