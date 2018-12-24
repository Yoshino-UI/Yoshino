export default [
  {
    title: 'API',
    json: [
      {
        props: 'loading',
        intro: '加载态',
        type: 'boolean',
        defaultValue: 'true',
      },
      {
        props: 'rows',
        intro: '占位行数，为数组的时候可以设置对应行的样式',
        type: 'number | React.CSSProperties[]',
        defaultValue: '',
      },
      {
        props: 'active',
        intro: '是否开始动画效果',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'lastWidth',
        intro: 'number',
        type: 'number | string',
        defaultValue: '80%',
      },
    ]
  }
];
