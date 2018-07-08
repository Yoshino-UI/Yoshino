
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Transitions from '../Transitions';

const {Slide} = Transitions;

export interface IDrawerProps extends IBaseComponent {
  diretion: 'left' | 'right';
  width?: number;
  open: boolean;
  zIndex?: number;
}

export interface IDrawerState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class Drawer extends Component<IDrawerProps, IDrawerState> {
  static defaultProps = {
    width: 256,
    docked: true,
    zIndex: 100,
  };

  render() {
    const {
      className, style, diretion,
      open, width, zIndex, children,
      ...otherProps
    } = this.props;
    const preCls = 'yoshino-drawer';
    const clsName = classNames(
      preCls, className, `${preCls}-${diretion}`
    );
    return (
      <Slide
        active={open}
        timeout={300}
        direction={diretion}
      >
        <div
          className={clsName}
          style={{
            width,
            zIndex,
            ...style,
          }}
          {...otherProps}
        >
          {children}
        </div>
      </Slide>
    );
  }
}

export default Drawer;
