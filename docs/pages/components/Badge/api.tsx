export default [
  {
    title: 'API',
    json: [
      {
        props: 'count',
        intro: '展示的数字',
        type: 'number',
        defaultValue: '-',
      },
      {
        props: 'max',
        intro: '展示数字最大值',
        type: 'number',
        defaultValue: '99',
      },
      {
        props: 'showZero',
        intro: 'count为0的时候是否显示徽标',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'dotted',
        intro: '小点，设置后count无效',
        type: 'boolean',
        defaultValue: 'false',
      },
    ]
  }
];
