export default [
  {
    title: 'API',
    json: [
      {
        props: 'size',
        intro: '头像尺寸',
        type: `'small' | 'default' | 'large'`,
        defaultValue: 'default',
      },
      {
        props: 'shape',
        intro: '形状',
        type: `'circle' | 'square'`,
        defaultValue: 'circle',
      },
      {
        props: 'icon',
        intro: '头像内容，也可以是文字',
        type: 'ReactNode',
        defaultValue: 'person',
      },
      {
        props: 'src',
        intro: '图片资源',
        type: 'string',
        defaultValue: '-',
      },
    ]
  }
];
