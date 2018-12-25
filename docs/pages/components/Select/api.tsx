export default [
  {
    title: 'API - Select',
    json: [
      {
        props: 'value',
        intro: '受控值',
        type: 'string | number | Array<number | string>',
        defaultValue: '-',
      },
      {
        props: 'defaultValue',
        intro: '默认值',
        type: 'string | number | Array<number | string>',
        defaultValue: '-',
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
        type: '(value: string | number | Array<number | string>) => void;',
        defaultValue: '-',
      },
      {
        props: 'size',
        intro: '尺寸大小',
        type: `'small' | 'large' | 'default'`,
        defaultValue: 'default',
      },
      {
        props: 'mode',
        intro: '单选、多选',
        type: `'single' | 'multiple'`,
        defaultValue: 'single',
      },
      {
        props: 'placeholder',
        intro: '值为空时的文案',
        type: 'string',
        defaultValue: '-',
      },
      {
        props: 'compact',
        intro: '紧凑模式',
        type: 'header、footer使用Select时需要设计',
        defaultValue: 'false',
      },
    ]
  },
  {
    title: 'API - Select.OptGroup',
    json: [
      {
        props: 'label',
        intro: '组名',
        type: 'string',
        defaultValue: '-',
      },
      {
        props: 'key',
        intro: '对应key',
        type: 'string | number',
        defaultValue: '-',
      },
    ]
  },
  {
    title: 'API - Select.Option',
    json: [
      {
        props: 'disabled',
        intro: '是否禁用',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'value',
        intro: '值',
        type: 'number | string',
        defaultValue: '-',
      },
      {
        props: 'key',
        intro: '对应key',
        type: 'string | number',
        defaultValue: '-',
      },
    ]
  }
];
