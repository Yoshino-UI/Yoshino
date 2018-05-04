
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import { StepsItem, IStepsItemProps } from './StepsItem';

export interface IStepsProps extends IBaseComponent {
  /**
   * 方向 'vertical' | 'horizontal'
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * 当前步骤  从0开始计数
   */
  current: number;
  /**
   * 大小
   */
  size?: 'default' | 'small';
}

export interface IStepsDefaultProps extends IStepsProps {
  size: 'default' | 'small';
  direction: 'vertical' | 'horizontal';
}

export interface IStepsState {

}

/**
 * **步骤条**-流程状态
 */
export class Steps extends Component<IStepsProps, IStepsState> {
  static defaultProps = {
    direction: 'horizontal',
    size: 'default',
    current: 0,
  };

  static Item: typeof StepsItem;

  render() {
    const {
      className, style, children,
      direction, size, current,
      ...otherProps,
    } = this.props as IStepsDefaultProps;
    const preCls = 'yoshino-steps';
    const clsName = classNames(
      preCls, `${preCls}-${direction}`, className,
    );
    const childrens = React.Children.toArray(children).filter((item) => item);
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
      {
         React.Children.map(childrens, (ele: React.ReactElement<IStepsItemProps>, index: number) => {
          return React.cloneElement(ele, {
            direction,
            value: index,
            size,
            current,
          });
        })
       }
      </div>
    );
  }
}

export default Steps;
