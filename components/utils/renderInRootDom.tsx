import {Component, ReactElement} from 'react';
import * as ReactDom from 'react-dom';

interface IProps {
  // tslint:disable
  children: ReactElement<any>;
  boxClass: string;
}

interface IStatus {

}

// 根节点渲染HOC
export class RenderInRootDom extends Component<IProps, IStatus> {
  box: HTMLElement;

  // 在根节点下渲染children
  componentDidMount() {
    this.box = document.createElement("div");
    this.box.setAttribute('class', this.props.boxClass);
    document.body.appendChild(this.box);
    this._renderLayer();
  }

  // 节点更新
  componentDidUpdate() {
    this._renderLayer();
  }

  // 组件卸载时移除渲染节点
  componentWillUnmount() {
    ReactDom.unmountComponentAtNode(this.box);
    document.body.removeChild(this.box);
  }

  // 渲染方法
  _renderLayer() {
    ReactDom.render(this.props.children, this.box);
  }

  render() {
    return null;
  }
}
