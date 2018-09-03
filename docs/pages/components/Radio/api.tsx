export default [
  {
    title: 'Radio',
    json: [
      {
        props: 'value',
        intro: '值',
        type: 'any',
        defaultValue: '-',
      },
      {
        props: 'checked',
        intro: '是否选中',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'disabled',
        intro: '是否禁用',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'onChange',
        intro: '变化回调',
        type: '(value: any) => void',
        defaultValue: '-',
      },
    ]
  },
  {
    title: 'Radio.Group',
    json: [
      {
        props: 'defaultValue',
        intro: '默认值',
        type: 'any',
        defaultValue: '-',
      },
      {
        props: 'value',
        intro: '选中的值',
        type: 'any',
        defaultValue: '-',
      },
      {
        props: 'onChange',
        intro: '变化回调',
        type: '(value: any) => void',
        defaultValue: '-',
      },
    ]
  }
];
