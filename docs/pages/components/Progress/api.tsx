export default [
  {
    title: 'API',
    json: [
      {
        props: 'type',
        intro: '进度条类型线性、圆形',
        type: '`line` | `circle`',
        defaultValue: 'line',
      },
      {
        props: 'percent',
        intro: '当前百分比',
        type: 'number',
        defaultValue: '-',
      },
      {
        props: 'bgColor',
        intro: '进度条背景色',
        type: 'string',
        defaultValue: '-',
      },
      {
        props: 'strokeColor',
        intro: '进度条颜色',
        type: 'string',
        defaultValue: '-',
      },
      {
        props: 'diameter',
        intro: '圆形进度条直径',
        type: 'number',
        defaultValue: '120',
      },
      {
        props: 'strokeWidth\r\n type=\'line\'',
        intro: '进度条宽度',
        type: 'number',
        defaultValue: '6',
      },
      {
        props: 'strokeWidth\r\n type=\'circle\'',
        intro: '进度条宽度',
        type: 'number',
        defaultValue: '8',
      },
      {
        props: 'format',
        intro: '内容的模板函数',
        type: '(percent: number) => string',
        defaultValue: '-',
      },
    ]
  }
];
