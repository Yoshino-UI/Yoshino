
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Icon from '../Icon';

export interface IAvatarProps extends IBaseComponent {
  /**
   * 头像尺寸
   */
  size?: 'small' | 'default' | 'large';
  /**
   * 形状
   */
  shape?: 'circle' | 'square';
  /**
   * 图标 - 与Icon相同
   */
  icon?: string;
  /**
   * 图片资源
   */
  src?: string;
}

export interface IAvatarState {

}

/**
 * **头像**-用于表示用户头像信息
 */
export class Avatar extends Component<IAvatarProps, IAvatarState> {
  static defaultProps = {
    size: 'default',
    shape: 'circle',
    icon: 'person',
  };

  render() {
    const {className, style, size, shape, icon, src, ...otherProps} = this.props;
    const preCls = 'yoshino-avatar';
    const clsName = classNames(
      preCls, `${preCls}-${size}`,
      `${preCls}-${shape}`, className,
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        {
          !src ? (
            <Icon type={icon as string}/>
          ) : (
            <img src={src}/>
          )
        }
      </div>
    );
  }
}

export default Avatar;
