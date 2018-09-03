export default [
  {
    title: 'Menu',
    intro: 'TKey: number | string',
    json: [
      {
        props: 'activeKey',
        intro: '受控 - 激活key',
        type: 'TKey',
        defaultValue: '-',
      },
      {
        props: 'defaultActiveKey',
        intro: '非受控 - 激活key',
        type: 'TKey',
        defaultValue: '-',
      },
      {
        props: 'openKeys',
        intro: '受控 - 展开key',
        type: 'TKey[]',
        defaultValue: '-',
      },
      {
        props: 'defaultOpenKeys',
        intro: '非受控 - 展开key',
        type: 'TKey[]',
        defaultValue: '`[]`',
      },
      {
        props: 'onSelect',
        intro: 'item - 选中回调',
        type: '(activeKey: TKey) => void',
        defaultValue: '-',
      },
      {
        props: 'onOpenChange',
        intro: '展开回调',
        type: '(openKeys: TKey[]) => void',
        defaultValue: '-',
      },
      {
        props: 'offset',
        intro: '菜单子项偏移量',
        type: 'number',
        defaultValue: '24',
      },
    ]
  },
  {
    title: 'Menu.SubMenu',
    json: [
      {
        props: 'title',
        intro: '标题',
        type: 'string | React.ReactNode',
        defaultValue: '-',
      },
      {
        props: 'keyId',
        intro: '唯一标志',
        type: 'TKey',
        defaultValue: '-',
      },
      {
        props: 'disabled',
        intro: '禁用',
        type: 'boolean',
        defaultValue: '`false`',
      },
    ]
  },
  {
    title: 'Menu.ItemGroup',
    json: [
      {
        props: 'title',
        intro: '标题',
        type: 'string | React.ReactNode',
        defaultValue: '-',
      },
      {
        props: 'keyId',
        intro: '唯一标志',
        type: 'TKey',
        defaultValue: '-',
      },
    ]
  },
  {
    title: 'Menu.Item',
    json: [
      {
        props: 'keyId',
        intro: '唯一标志',
        type: 'TKey',
        defaultValue: '-',
      },
      {
        props: 'disabled',
        intro: '禁用',
        type: 'boolean',
        defaultValue: '`false`',
      },
    ]
  },
];
