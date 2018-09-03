export default [
  {
    title: 'API',
    json: [
      {
        props: 'current',
        intro: '当前页数',
        type: 'number',
        defaultValue: '-',
      },
      {
        props: 'defaultCurrent',
        intro: '默认当前页数',
        type: 'number',
        defaultValue: '1',
      },
      {
        props: 'pageSize',
        intro: '每页条数',
        type: 'number',
        defaultValue: '10',
      },
      {
        props: 'total',
        intro: '总条数',
        type: 'nuumber',
        defaultValue: '-',
      },
      {
        props: 'max',
        intro: '显示页码块最多的个数',
        type: 'number',
        defaultValue: '5',
      },
      {
        props: 'next',
        intro: '自定义文本-下一页',
        type: 'string | ReactNode',
        defaultValue: '-',
      },
      {
        props: 'previous',
        intro: '自定义文本-上一页',
        type: 'string | ReactNode',
        defaultValue: '-',
      },
      {
        props: 'onChange',
        intro: '页码改变回调',
        type: '(current: number, pageSize: number) => void',
        defaultValue: '-',
      },
    ]
  }
];
