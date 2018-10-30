
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Icon from '../Icon';
import { RenderInRootDom } from '../utils/';
import { backTop } from './assist';

export interface IBackTopProps extends IBaseComponent {
  /**
   * 距离底部距离
   */
  bottom?: number;
  /**
   * 距离右侧距离
   */
  right?: number;
  /**
   * 触发backtop的高度
   */
  height?: number;
  /**
   * 动画时间
   */
  duration?: number;
  /**
   * 回调函数
   */
  onBackTop?: () => void;
}

export interface IBackTopState {
  /**
   * 是否显示backtop
   */
  show: boolean;
}

/**
 * **返回顶部**-返回页面顶部的操作按钮。
 */
class BackTop extends Component<IBackTopProps, IBackTopState> {
  state = {
    show: false,
  };

  static defaultProps = {
    height: 200,
    bottom: 50,
    right: 50,
    duration: 500,
  };

  scrollListener = () => {
    const height = this.props.height ? this.props.height : 200;
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    const show  = top >= height;
    this.setState({
      show,
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener, false);
    window.addEventListener('resize', this.scrollListener, false);
  }

  componentWillUnMount() {
    window.removeEventListener('scroll', this.scrollListener, false);
    window.removeEventListener('resize', this.scrollListener, false);
  }
  render() {
    const {
      className, style, children,
      bottom, right, duration,
      onBackTop,
      ...otherProps} = this.props;
    const preCls = 'yoshino-backtop';
    const clsName = classNames(
      preCls, className,
    );
    const backtopStyle = {
      right: `${right}px`,
      bottom: `${bottom}px`,
    };
    return (
      <RenderInRootDom boxClass='backtop'>
        <div
          className={clsName}
          style={{
            ...style,
            ...backtopStyle,
          }}
          {...otherProps}
          onClick={backTop.bind(this, duration, onBackTop)}
        >
          {
            this.state.show ? children ?  children : (
            <div className={`${preCls}-default`}>
              <Icon type='ios-arrow-up'/>
            </div>
            ) : null
          }
        </div>
      </RenderInRootDom>
    );
  }
}

export default BackTop;
