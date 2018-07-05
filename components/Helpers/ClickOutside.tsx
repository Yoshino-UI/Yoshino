
import {Component} from 'react';
import * as React from 'react';
import {IBaseComponent} from '../template/component';

export interface IClickOutsideProps extends IBaseComponent {
  clickOutside: () => void;
  clickInside?: () => void;
}

export interface IClickOutsideState {

}

export class ClickOutside extends Component<IClickOutsideProps, IClickOutsideState> {
  refChildren: HTMLElement;

  clickHandle = (e: MouseEvent) => {
    const {clickOutside, clickInside} = this.props;
    if (e.target !== this.refChildren) {
      clickOutside();
    } else {
      if (clickInside) {
        clickInside();
      }
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this.clickHandle);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.clickHandle);
  }

  render() {
    const {children} = this.props;
    const child = React.Children.only(children);
    return React.cloneElement(child, {
      ref: (v: HTMLElement) => {
        if (v) {
          this.refChildren = v;
        }
      }
    });
  }
}

export default ClickOutside;
