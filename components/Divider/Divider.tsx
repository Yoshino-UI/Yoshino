
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';

export interface IDividerProps extends IBaseComponent {
  /**
   * 是否虚线
   */
  dashed?: boolean;
  /**
   * 文本表现
   */
  textAlign?: 'left' | 'center' | 'right';
}

export interface IDividerState {

}

/**
 * **分割线**-一般用于分割段落或者内容划分
 */
export class Divider extends Component<IDividerProps, IDividerState> {
  static defaultProps = {
    dashed: false,
    textAlign: 'center',
  };

  render() {
    const {className, style, dashed, children, textAlign, ...otherProps} = this.props;
    const preCls = 'yoshino-divider';
    const textCls = `${preCls}-${textAlign}`;
    const dashedCls = {[`${preCls}-dashed`]: dashed};
    const clsName = classNames(
      preCls, textCls, dashedCls, className,
    );
    return (
      <div
        className={clsName}
        style={{
          ...style,
        }}
        {...otherProps}
      >
        {children ? (<p className={`${preCls}-text`}>{children}</p>) : null}
      </div>
    );
  }
}

export default Divider;
