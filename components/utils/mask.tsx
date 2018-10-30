import * as React from 'react';

export interface IProps {
  maskStyle?: React.CSSProperties;
  onClick?: () => void;
}

export default function(props: IProps) {
  const style: React.CSSProperties = {
    background: 'rgba(0, 0, 0, 0.65)',
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '100vh',
    width: '100vw',
  };
  return (
    <div
      style={{...style, ...props.maskStyle}}
      onClick={props.onClick}
    />
  );
}
