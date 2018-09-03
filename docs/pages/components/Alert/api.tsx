export default [
  {
    title: 'API',
    json: [
      {
        props: 'type',
        intro: '提示类型',
        type: `'success' | 'info' | 'warning' | 'error'`,
        defaultValue: '-',
      },
      {
        props: 'closable',
        intro: '是否支持关闭',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'showIcon',
        intro: '是否显示图标',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'icon',
        intro: '自定义图标',
        type: 'ReactNode',
        defaultValue: '-',
      },
      {
        props: 'title',
        intro: '标题',
        type: 'ReactNode | string',
        defaultValue: '-',
      },
      {
        props: 'onClose',
        intro: '关闭回调',
        type: '() => void',
        defaultValue: '-',
      },
    ]
  }
];
