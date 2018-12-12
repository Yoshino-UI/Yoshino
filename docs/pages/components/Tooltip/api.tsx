export default [
  {
    title: 'API',
    json: [
      {
        props: 'placement',
        intro: '气泡框位置',
        type: `'top' | 'left' | 'right' | 'bottom' | 'topLeft' |
        'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' |'leftBottom' | 'rightTop' | 'rightBottom'`,
        defaultValue: 'top',
      },
      {
        props: 'mouseEnterDelay',
        intro: '鼠标移入后延时多少才显示 Tooltip， 单位: ms',
        type: 'number',
        defaultValue: '0',
      },
      {
        props: 'mouseLeaveDelay',
        intro: '鼠标移出后延时多少才隐藏 Tooltip，单位：ms',
        type: 'number',
        defaultValue: '100',
      },
      {
        props: 'overlayClassName',
        intro: '卡片类名',
        type: 'string',
        defaultValue: '-',
      },
      {
        props: 'overlayStyle',
        intro: '卡片样式',
        type: 'React.CSSProperties',
        defaultValue: '-',
      },
      {
        props: 'trigger',
        intro: '触发行为',
        type: `'hover' | 'focus' | 'click'`,
        defaultValue: 'hover',
      },
      {
        props: 'title',
        intro: '提示内容',
        type: 'ReactNode',
        defaultValue: '-',
      },
      {
        props: 'visible',
        intro: '受控-是否可见',
        type: 'boolean',
        defaultValue: '-',
      },
      {
        props: 'defaultVisible',
        intro: '初始值',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'onChange',
        intro: '变化回调',
        type: '(visible: boolean) => void',
        defaultValue: '-',
      },
      {
        props: 'mountOnEnter',
        intro: '进入时才渲染',
        type: 'boolean',
        defaultValue: 'false',
      },
    ]
  }
];
