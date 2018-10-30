import * as React from 'react';
import { RenderInRootDom } from './renderInRootDom';
import Mask from './mask';
import { CSSProperties } from 'react';

export interface IProps {
  showMask?: boolean;
  maskStyle?: CSSProperties;
  maskClick?: () => void;
  visible: boolean;
  zIndex?: number;
}
export default class Dialog extends React.Component<IProps> {
  static defaultProps = {
    showMask: true,
  };

  render() {
    const {
      showMask, maskStyle, zIndex,
      maskClick, visible, children,
    } = this.props;
    const style: CSSProperties = {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    };
    return visible ? (
      <RenderInRootDom
        zIndex={zIndex}
      >
        <div style={style}>
        {
          showMask ? (
          <Mask
            maskStyle={maskStyle}
            onClick={() => {
              if (maskClick) {
                maskClick();
              }
            }}
          />
          ) : null
        }
        {children}
        </div>
      </RenderInRootDom>
    ) : null;
  }
}
