export default [
  {
    title: 'Steps',
    json: [
      {
        props: 'direction',
        intro: '方向',
        type: `'vertical' | 'horizontal'`,
        defaultValue: '',
      },
      {
        props: 'current',
        intro: '当前步骤  从0开始计数',
        type: 'number',
        defaultValue: '-',
      },
      {
        props: 'size',
        intro: '大小',
        type: `'default' | 'small'`,
        defaultValue: 'default',
      },
    ]
  },
  {
    title: 'Steps.Item',
    json: [
      {
        props: 'title',
        intro: '步骤标题',
        type: 'React.ReactNode',
        defaultValue: '-',
      },
      {
        props: 'icon',
        intro: '自定义图标',
        type: 'ReactNode',
        defaultValue: '-',
      },
      {
        props: 'status',
        intro: '当前步骤状态',
        type: `'error' | 'finished'`,
        defaultValue: '-',
      },
    ]
  }
];
