import * as configMd from './config.md';

export default [
  {
    title: 'API',
    intro: configMd,
    json: [
      {
        props: 'zIndex',
        intro: '对应css的z-index',
        type: 'number',
        defaultValue: '1000',
      },
      {
        props: 'width',
        intro: '对话框宽度',
        type: 'number',
        defaultValue: '256',
      },
      {
        props: 'onOk',
        intro: '确认按钮回调，返回值为`true`时关闭',
        type: '() => boolean',
        defaultValue: '-',
      },
      {
        props: 'onCancel',
        intro: '取消按钮回到',
        type: '() => void',
        defaultValue: '-',
      },
      {
        props: 'onClose',
        intro: '对话框关闭时回调，点击取消、确定、以及右上角关闭时都会触发',
        type: '() => void',
        defaultValue: '-',
      },
      {
        props: 'okText',
        intro: '确认按钮文本',
        type: 'ReactNode',
        defaultValue: '确定',
      },
      {
        props: 'cancelText',
        intro: '取消按钮文本',
        type: 'ReactNode',
        defaultValue: '取消',
      },
      {
        props: 'title',
        intro: '标题',
        type: 'ReactNode',
        defaultValue: '-',
      },
      {
        props: 'content',
        intro: '内容',
        type: 'ReactNode',
        defaultValue: '-',
      },
      {
        props: 'bodyContent',
        intro: '主体部分，可以覆盖title、content以icon',
        type: 'ReactNode',
        defaultValue: '-',
      },
      {
        props: 'icon',
        intro: '图标',
        type: 'ReactNode',
        defaultValue: '-',
      },
      {
        props: 'showCancel',
        intro: '是否显示取消按钮',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'showClose',
        intro: '是否显示关闭按钮',
        type: 'boolean',
        defaultValue: 'true',
      },
      {
        props: 'showMask',
        intro: '是否显示蒙层',
        type: 'boolean',
        defaultValue: 'true',
      },
      {
        props: 'maskClosable',
        intro: '点击蒙层是否关闭',
        type: 'boolean',
        defaultValue: 'true',
      },
      {
        props: 'maskClick',
        intro: '蒙层点击事件',
        type: '() => void',
        defaultValue: '-',
      },
      {
        props: 'maskStyle',
        intro: '蒙层样式',
        type: 'React.CSSProperties',
        defaultValue: '-',
      },
    ]
  }
];
