export default [
  {
    title: 'API',
    json: [
      {
        props: 'value',
        intro: '滑块值 - 受控',
        type: 'number',
        defaultValue: '-',
      },
      {
        props: 'defaultValue',
        intro: '滑块值 - 非受控',
        type: 'number',
        defaultValue: '0',
      },
      {
        props: 'onChange',
        intro: '变化回调',
        type: '(value: number) => void',
        defaultValue: '-',
      },
      {
        props: 'max',
        intro: '最大值',
        type: 'number',
        defaultValue: '100',
      },
      {
        props: 'min',
        intro: '最小值',
        type: 'number',
        defaultValue: '0',
      },
      {
        props: 'disabled',
        intro: '禁用状态',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'step',
        intro: '步长',
        type: 'number',
        defaultValue: '1',
      },
    ]
  }
];
