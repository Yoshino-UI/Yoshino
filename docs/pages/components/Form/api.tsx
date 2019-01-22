export default [
  {
    title: 'API - Form',
    json: [
      {
        props: 'onChange',
        intro: '数值变化回调',
        type: '(v) => void',
        defaultValue: '-',
      },
      {
        props: 'rt',
        intro: 'real-time，实时校验开关',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'labelCol',
        intro: 'label布局，参考`Grid`中的Col Props，若`Validator`没配置则Form的配置优先生效',
        type: 'ICol',
        defaultValue: '{span: 8}',
      },
      {
        props: 'wrapperCol',
        intro: '输入控件布局，参考`Grid`中的Col Props，若`Validator`没配置则Form的配置优先生效',
        type: 'ICol',
        defaultValue: '{span: 16}',
      },
      {
        props: 'row',
        intro: '输入控件布局，参考`Grid`中的Row Props，若`Validator`没配置则Form的配置优先生效',
        type: 'IRow',
        defaultValue: `{align: 'middle',type: 'flex'}`,
      },
      {
        props: 'requiredMsg',
        intro: '`Validator`中`required`为`true`时，`message`默认值，`name`对应`Validator`中`name`',
        type: 'string',
        defaultValue: '${name}不能为空',
      }
    ]
  },
  {
    title: 'API - Form method',
    intro: '通过ref获取form示例',
    json: [
      {
        props: 'check',
        intro: '校验器，主动触发表单校验，校验不通过时返回`false`，成功时返回表单值',
        type: '() => boolean | object',
        defaultValue: '-',
      },
    ]
  },
  {
    title: 'API - Validator',
    json: [
      {
        props: 'valueTrigger',
        intro: '控件数值变化触发器，例如Input的为`onChange`',
        type: 'string',
        defaultValue: 'onChange',
      },
      {
        props: 'valueName',
        intro: '数值名，例如Switch的为checked，Input为value',
        type: 'ICol',
        defaultValue: '{span: 3}',
      },
      {
        props: 'value',
        intro: '初始值，不受控',
        type: 'any',
        defaultValue: '-',
      },
      {
        props: 'name',
        intro: '数值在Object中的key',
        type: 'string',
        defaultValue: '-',
      },
      {
        props: 'required',
        intro: '是否为必填项',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        props: 'message',
        intro: '错误提示信息，如果`checkers`返回值不为字符串则显示该默认提示信息',
        type: 'string',
        defaultValue: '-',
      },
      {
        props: 'checkers',
        intro: '数值校验器，返回值为`true`通过校验，`false`时显示`message`，为字符串则显示对应错误提示信息。',
        type: 'Array<(v: any) => boolean | string>',
        defaultValue: '-',
      },
      {
        props: 'label',
        intro: '标题名',
        type: 'string',
        defaultValue: '-',
      },
      {
        props: 'labelCol',
        intro: 'label布局，参考`Grid`中的Col Props',
        type: 'ICol',
        defaultValue: '{span: 3}',
      },
      {
        props: 'wrapperCol',
        intro: '输入控件布局，参考`Grid`中的Col Props',
        type: 'ICol',
        defaultValue: '{span: 10}',
      },
      {
        props: 'row',
        intro: '输入控件布局，参考`Grid`中的Row Props',
        type: 'IRow',
        defaultValue: `{align: 'middle',type: 'flex'}`,
      },
    ]
  },
];
