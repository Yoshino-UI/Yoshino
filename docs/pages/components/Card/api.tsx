export default [
  {
    title: 'API',
    json: [
      {
        props: 'title',
        intro: '标题',
        type: 'string',
        defaultValue: '',
      },
      {
        props: 'extra',
        intro: '更多',
        type: 'ReactNode',
        defaultValue: '',
      },
      {
        props: 'border',
        intro: '边框',
        type: 'boolean',
        defaultValue: 'true',
      },
      {
        props: 'boxshadow',
        intro: '阴影',
        type: 'boolean',
        defaultValue: 'false',
      },
    ]
  }
];
