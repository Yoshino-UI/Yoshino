export default [
  {
    title: 'API',
    json: [
      {
        props: 'direction',
        intro: '抽屉导航弹出方向',
        type: '`left` | `right`',
        defaultValue: '-',
      },
      {
        props: 'width',
        intro: '抽屉弹框宽度',
        type: 'number',
        defaultValue: '256',
      },
      {
        props: 'open',
        intro: '开关状态',
        type: 'boolean',
        defaultValue: '-',
      },
      {
        props: 'zIndex',
        intro: '弹框的`z-index`',
        type: 'number',
        defaultValue: '100',
      },
    ]
  }
];
