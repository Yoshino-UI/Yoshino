
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Icon from '../Icon';
import Transitions from '../Transitions';
import { getRGB } from '../utils/colorFormat';

export interface ITagProps extends IBaseComponent {
  /**
   * 标签模式
   */
  mode?: 'custom' | 'geek';
  /**
   * 可否关闭
   */
  closeable?: boolean;
  /**
   * 颜色
   */
  color?: string;
  /**
   * 关闭回调
   */
  onClose?: () => void;
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

const {Scale} = Transitions;
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
    const {onClose} = this.props;

    if (onClose) {
      onClose();
    }

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
    const {
      className, style, children, closeable,
      color, onClose, mode = 'custom',
      ...otherProps
    } = this.props;
    const {show} = this.state;
    const preCls = 'yoshino-tag';
    const clsName = classNames(
      preCls,
      {[`${preCls}-color`]: !!color && mode !== 'geek'},
      className,
    );
    const modeStyle = {
      custom: {
        backgroundColor: color,
      },
      geek: this.getGeekStyle(),
    };
    const tagStyle = color ? modeStyle[mode] : {};
    return (
      <Scale
        active={show}
        timeout={300}
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
      </Scale>
    );
  }
}

export default Tag;
