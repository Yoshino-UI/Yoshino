export default [
  {
    title: 'API - Expand',
    intro: 'Transitions.Expand',
    json: [
      {
        props: 'timeout',
        intro: '动画时间',
        type: 'number',
        defaultValue: '-',
      },
      {
        props: 'active',
        intro: '激活状态',
        type: 'boolean',
        defaultValue: '-',
      },
    ]
  },
  {
    title: 'API - Slide',
    intro: 'Transitions.Slide',
    json: [
      {
        props: 'appear',
        intro: '首次进入是否加载动画',
        type: 'boolean',
        defaultValue: 'true',
      },
      {
        props: 'opacity',
        intro: '是否开启透明度变化',
        type: 'boolean',
        defaultValue: 'true',
      },
      {
        props: 'single',
        intro: '是否单向进出',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'timeout',
        intro: '动画时间',
        type: 'number',
        defaultValue: '-',
      },
      {
        props: 'active',
        intro: '激活状态',
        type: 'boolean',
        defaultValue: '-',
      },
      {
        props: 'direction',
        intro: '方向',
        type: '`left` | `top` | `right` | `bottom`',
        defaultValue: '-',
      },
    ]
  }
];
