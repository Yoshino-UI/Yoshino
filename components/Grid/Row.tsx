// tslint:disable no-any
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';

export interface IRowProps extends IBaseComponent {
  align?: 'top' | 'middle' | 'bottom';
  gutter?: number ;
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  type?: 'flex';
}

export interface IRowState {
  screens: {[index: string]: any};
}

/**
 * **组件中文名称**-组件描述。
 */
export class Row extends Component<IRowProps, IRowState> {
  preCls = 'yoshino-row';

  static defaultProps = {
    type: '',
    gutter: 0,
    justify: 'start',
    align: 'top',
  };

  render() {
    const {
      className, style,
      align = 'top', gutter = 0, justify = 'start',
      type = '', children,
      ...otherProps} = this.props;
    const preCls = this.preCls;
    const clsName = classNames(
      preCls, className, {
        [preCls]: !type,
        [`${preCls}-${type}`]: !!type,
        [`${preCls}-${type}-${justify}`]: !!type && !!justify,
        [`${preCls}-${type}-${align}`]: !!type && !!align,
      }
    );
    const offsetStyle = gutter > 0 ? {
      marginLeft: gutter / -2,
      marginRight: gutter / -2,
    } : {};
    const colChildren = React.Children.map(children, (child: React.ReactElement<HTMLDivElement>) => {
      return React.cloneElement(child, {
        style: {
          paddingLeft: gutter / 2,
          paddingRight: gutter / 2,
          ...child.props.style,
        },
      });
    });
    return (
      <div
        className={clsName}
        style={{...offsetStyle, ...style}}
        {...otherProps}
      >
        {colChildren}
      </div>
    );
  }
}

export default Row;
