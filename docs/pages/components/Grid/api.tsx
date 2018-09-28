export default [
  {
    title: 'API - Row',
    json: [
      {
        props: 'align',
        intro: '`flex`模式下垂直方向对齐方式',
        type: '`top` | `middle` | `bottom`',
        defaultValue: 'top',
      },
      {
        props: 'gutter',
        intro: '栅格间隔',
        type: 'number',
        defaultValue: '0',
      },
      {
        props: 'justify',
        intro: '`flex`模式下水平方向对齐方式',
        type: '`start` | `end` | `center` | `space-around` | `space-between`',
        defaultValue: 'start',
      },
      {
        props: 'type',
        intro: '布局模式，需要浏览器自持`flex`',
        type: '`flex`',
        defaultValue: '-',
      },
    ]
  },
  {
    title: 'API - Col',
    json: [
      {
        props: 'span',
        intro: '栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none',
        type: 'number',
        defaultValue: '0',
      },
      {
        props: 'offset',
        intro: '栅格左侧的间隔格数，间隔内不可以有栅格',
        type: 'number',
        defaultValue: '0',
      },
      {
        props: 'pull',
        intro: '栅格向左移动格数',
        type: 'number',
        defaultValue: '0',
      },
      {
        props: 'push',
        intro: '栅格向右移动格数',
        type: 'number',
        defaultValue: '0',
      },
      {
        props: 'order',
        intro: '`type`设置为`flex`的时候生效',
        type: 'number',
        defaultValue: '-',
      },
      {
        props: 'xs',
        intro: '`<576px` 响应式栅格，可为栅格数或一个包含其他属性的对象',
        type: '`number` | `object`',
        defaultValue: '-',
      },
      {
        props: 'sm',
        intro: '`≥576px` 响应式栅格，可为栅格数或一个包含其他属性的对象',
        type: '`number` | `object`',
        defaultValue: '-',
      },
      {
        props: 'md',
        intro: '`≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象',
        type: '`number` | `object`',
        defaultValue: '-',
      },
      {
        props: 'lg',
        intro: '`≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象',
        type: '`number` | `object`',
        defaultValue: '-',
      },
      {
        props: 'xl',
        intro: '`≥1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象',
        type: '`number` | `object`',
        defaultValue: '-',
      },
      {
        props: 'xxl',
        intro: '`≥1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象',
        type: '`number` | `object`',
        defaultValue: '-',
      },
    ]
  }
];
