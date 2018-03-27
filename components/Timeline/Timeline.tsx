
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';

export interface ITimelineProps extends IBaseComponent {

}

export interface ITimelineState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class Timeline extends Component<ITimelineProps, ITimelineState> {
  render() {
    const {className, style, ...otherProps} = this.props;
    const preCls = 'yoshino-timeline';
    return (
      <div
        className={classNames(className, preCls)}
        style={style}
        {...otherProps}
      >
      Timeline
      </div>
    );
  }
}

export default Timeline;
