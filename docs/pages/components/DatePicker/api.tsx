export default [
  {
    title: 'API',
    json: [
      {
        props: 'placeholder',
        intro: '默认提示文本',
        type: 'string',
        defaultValue: '`请选择日期`',
      },
      {
        props: 'defaultValue',
        intro: '默认值-非受控',
        type: 'string',
        defaultValue: '-',
      },
      {
        props: 'value',
        intro: '值-受控',
        type: 'string',
        defaultValue: '-',
      },
      {
        props: 'disabled',
        intro: '禁用态',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'onChange',
        intro: '值的变化回调',
        type: '(v: string) => void',
        defaultValue: '-',
      },
      {
        props: 'open',
        intro: '面板是否展开 -受控',
        type: 'boolean',
        defaultValue: '-',
      },
      {
        props: 'defaultOpen',
        intro: '面板是否展开 - 非受控',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'size',
        intro: '尺寸大小',
        type: 'TSize',
        defaultValue: 'default',
      },
      {
        props: 'format',
        intro: '时间格式',
        type: 'string',
        defaultValue: 'HH:mm:ss',
      },
    ]
  }
];
