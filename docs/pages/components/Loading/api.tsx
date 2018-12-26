export default [
  {
    title: 'API',
    json: [
      {
        props: 'type',
        intro: '加载图标的样式',
        type: `'a' | 'b' | 'c' | 'd'`,
        defaultValue: 'a',
      },
      {
        props: 'size',
        intro: '加载图标大小，当设置auto的时可以通过style的font-size设置图标大小',
        type: `'small' | 'default' | 'large' | auto''`,
        defaultValue: 'default',
      },
      {
        props: 'text',
        intro: '加载文本',
        type: 'string | boolean',
        defaultValue: '-',
      },
      {
        props: 'icon',
        intro: '自定义icon',
        type: 'ReactNode',
        defaultValue: '-',
      },
      {
        props: 'loading',
        intro: '加载状态',
        type: 'boolean',
        defaultValue: 'true',
      },
      {
        props: 'color',
        intro: '图标颜色, 也可以通过style的color来设置',
        type: 'string',
        defaultValue: '-',
      },
    ]
  }
];
