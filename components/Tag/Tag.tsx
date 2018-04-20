
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';
import Icon from '../Icon';
import Transition from '../utils/customTransition';

import { getRGB } from '../utils/colorFormat';

export interface ITagProps extends IBaseComponent {
  /**
   * 标签模式
   */
  mode: 'custom' | 'geek';
  /**
   * 可否关闭
   */
  closeable: boolean;
  /**
   * 颜色
   */
  color: string;
  /**
   * 关闭回调
   */
  onClose: () => void;
}

export interface ITagState {
  /**
   * 控制显示
   */
  show: boolean;
}

export interface IGeekStyle {
  color?: string;
  borderColor?: string;
  background?: string;
}

/**
 * **标签**-一般用于描述或者分类
 */
export class Tag extends Component<ITagProps, ITagState> {

  static defaultProps = {
    mode: 'custom',
  };

  state = {
    show: true,
  };

  closeTag = () => {
    this.setState({
      show: false,
    });
  }

  getGeekStyle = (): IGeekStyle => {
    let geekStyle: IGeekStyle = {};
    if (this.props.color) {
      const rgb = {...getRGB(this.props.color)};
      const r = rgb.r;
      const g = rgb.g;
      const b = rgb.b;
      geekStyle = {
        color: `rgb(${r}, ${g}, ${b})`,
        background: `rgba(${r}, ${g}, ${b}, 0.3)`,
        borderColor: `rgba(${r}, ${g}, ${b}, 0.5)`,
      };
    }
    return geekStyle;
  }

  render() {
    const {className, style, children, closeable, color, onClose, mode, ...otherProps} = this.props;
    const {show} = this.state;
    const preCls = 'yoshino-tag';
    const clsName = classNames(
      className, preCls, color && mode !== 'geek' ? `${preCls}-color` : null,
    );
    const modeStyle = {
      custom: {
        backgroundColor: color,
      },
      geek: this.getGeekStyle(),
    };
    const tagStyle = color ? modeStyle[mode] : {};
    return (
      <Transition
        show={show}
        onClose={onClose}
      >
        <span
          className={clsName}
          style={{
            ...tagStyle,
            ...style,
          }}
          {...otherProps}
        >
          {children}
          {
            closeable ? (
              <Icon
                type='close-round'
                className={`${preCls}-close`}
                onClick={this.closeTag}
              />
            ) : null
          }
        </span>
      </Transition>
    );
  }
}

export default Tag;
