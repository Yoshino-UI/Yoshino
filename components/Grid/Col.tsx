
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';

export interface ICol {
  offset?: number;
  order?: number;
  pull?: number;
  push?: number;
  span?: number;
}

export interface IColProps extends IBaseComponent,  ICol {
  xs?: number | ICol;
  sm?: number | ICol;
  md?: number | ICol;
  lg?: number | ICol;
  xl?: number | ICol;
  xxl?: number | ICol;
}

export interface IColState {

}

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

/**
 * **组件中文名称**-组件描述。
 */
export class Col extends Component<IColProps, IColState> {
  preCls = 'yoshino-col';

  static defaultProps = {
    offset: 0,
    order: 0,
    pull: 0,
    push: 0,
  };

  render() {
    const {
      className, style, span,
      offset, order, pull, push, children,
      ...otherProps} = this.props;
    const preCls = this.preCls;
    let sizeCls = {};

    sizes.forEach((size: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs') => {
      let sizeProps: ICol = {};
      // tslint:disable-next-line
      const props = this.props as any;
      if (typeof props[size] === 'number') {
        sizeProps.span = props[size];
      } else if (typeof props[size] === 'object') {
        sizeProps = props[size] || {};
      }

      delete otherProps[size];

      sizeCls = {
        ...sizeCls,
        [`${preCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
        [`${preCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
        [`${preCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
        [`${preCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
        [`${preCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
      };
    });

    const clsName = classNames(
      preCls, className, sizeCls, {
        [`${preCls}-${span}`]: span !== undefined,
        [`${preCls}-order-${order}`]: !!order,
        [`${preCls}-offset-${offset}`]: !!offset,
        [`${preCls}-push-${push}`]: !!push,
        [`${preCls}-pull-${pull}`]: !!pull,
      }
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
}

export default Col;
