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
        intro: '默认值-非受控，毫秒时间戳',
        type: 'number',
        defaultValue: '-',
      },
      {
        props: 'value',
        intro: '值-受控，毫秒时间戳',
        type: 'number',
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
        type: '(v: number) => void',
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
        defaultValue: 'YYYY-MM-DD',
      },
      {
        props: 'format',
        intro: '时间格式',
        type: 'string',
        defaultValue: 'YYYY-MM-DD',
      },
      {
        props: 'showTime',
        intro: '显示时刻选择',
        type: 'boolean | ITime',
        defaultValue: 'YYYY-MM-DD',
      },
    ]
  },
  {
    title: 'showTime - API',
    json: [
      {
        props: 'disabledHours',
        intro: '禁用时',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'disabledMinutes',
        intro: '禁用分',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'disabledSeconds',
        intro: '禁用秒',
        type: 'boolean',
        defaultValue: 'false',
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
