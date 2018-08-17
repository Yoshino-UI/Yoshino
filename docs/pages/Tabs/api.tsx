export default [
  {
    title: 'API -Tabs',
    json: [
      {
        props: 'activeKey',
        intro: '当前激活 tab 面板的 key， 对应`name`',
        type: '`string` | `number`',
        defaultValue: '-',
      },
      {
        props: 'defaultActivetKey',
        intro: '当前激活 tab 面板的 key， 对应name',
        type: '`string` | `number`',
        defaultValue: '-',
      },
      {
        props: 'onChange',
        intro: '面板切换回调',
        type: '(activeKey: `string` | `number`) => void',
        defaultValue: '',
      },
      {
        props: 'type',
        intro: '标签页样式',
        type: '`line` | `card`',
        defaultValue: '`line`',
      },
      {
        props: 'animated',
        intro: '是否启用动画',
        type: 'boolean',
        defaultValue: 'true',
      },
      {
        props: 'size',
        intro: '大小',
        type: '`large` | `small` | `default`',
        defaultValue: '`default`',
      },
      {
        props: 'tabBarGutter',
        intro: 'TabPane间隙',
        type: 'number',
        defaultValue: '-',
      },
      {
        props: 'onTabClick',
        intro: '点击tab',
        type: '(name: `string` | `number`) => void',
        defaultValue: '',
      },
      {
        props: 'tabPosition',
        intro: 'tab位置',
        type: '`left` | `right` | `top` | `bottom`',
        defaultValue: 'top',
      },
    ]
  },
  {
    title: 'API -Tabs.TabPane',
    json: [
      {
        props: 'name',
        intro: '选项标题，对应Tabs 的`activeKey`',
        type: '`string` | `number`',
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
