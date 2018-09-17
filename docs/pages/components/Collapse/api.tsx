export default [
  {
    title: 'Collapse',
    intro: 'TKey: string',
    json: [
      {
        props: 'activeKeys',
        intro: '受控 - 激活key',
        type: 'TKey[]',
        defaultValue: '-',
      },
      {
        props: 'defaultActiveKeys',
        intro: '非受控 - 激活key',
        type: 'TKey[]',
        defaultValue: '[]',
      },
      {
        props: 'accordion',
        intro: '手风琴模式，同时只能展开一个',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'onChange',
        intro: '变化回调',
        type: '(activeKeys: TKey[]) => void',
        defaultValue: '-',
      },
    ]
  },
  {
    title: 'Collapse.Panel',
    json: [
      {
        props: 'keyId',
        intro: '标记，对应activekey',
        type: 'TKey',
        defaultValue: '',
      },
      {
        props: 'title',
        intro: '折叠板标题',
        type: 'string | ReactNode',
        defaultValue: '-',
      },
      {
        props: 'disabled',
        intro: '禁用',
        type: 'boolean',
        defaultValue: 'false',
      },
    ]
  }
];
