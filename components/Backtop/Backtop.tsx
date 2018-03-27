
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';
import Icon from '../Icon';
import { RenderInRootDom } from '../utils/renderInRootDom';
import { backTop } from './assist';

export interface IBacktopProps extends IBaseComponent {
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
  callBack?: () => void;
}

export interface IBacktopState {
  /**
   * 是否显示backtop
   */
  show: boolean;
}

/**
 * **组件中文名称**-组件描述。
 */
class Backtop extends Component<IBacktopProps, IBacktopState> {
  state = {
    show: false,
  };

  static defaultProps = {
    height: 800,
    bottom: 50,
    right: 50,
    duration: 500,
  };

  scrollListener = () => {
    const height = this.props.height ? this.props.height : 800;
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
      callBack,
      ...otherProps} = this.props;
    const preCls = 'yoshino-backtop';
    const backtopStyle = {
      right: `${right}px`,
      bottom: `${bottom}px`,
    };
    return (
      <RenderInRootDom boxClass='backtop'>
        <div
          className={classNames(className, preCls)}
          style={{
            ...style,
            ...backtopStyle,
          }}
          {...otherProps}
          onClick={backTop.bind(this, duration, callBack)}
        >
          {
            this.state.show ? children ?  children : (
            <div className={`${preCls}-default`}>
              <Icon type='chevron-up'/>
            </div>
            ) : null
          }
        </div>
      </RenderInRootDom>
    );
  }
}

export default Backtop;
