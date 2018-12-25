import * as React from 'react';
import { Input, Button, Select } from '@yoshino/components/';

export default function() {
  return (
    <div>
      <Input
        style={{width: '500px'}}
        header={<Button type='primary' style={{width: '80px', height: '32px'}}>头部</Button>}
        headerStyle={{padding: 0, border: 'none'}}
        footer={<Button type='primary' style={{width: '100px', height: '32px'}}>尾部</Button>}
        footerStyle={{padding: 0, border: 'none'}}
        onChange={() => console.log('输入变化了')}
        onEnter={() => console.log('按了回车')}
      />
      <p>使用Select时需要开启紧凑模式</p>
      <Input
        style={{width: '200px', marginTop: 20}}
        compact
        header={(
          <Select
            defaultValue='1'
            style={{width: '80px', height: '32px'}}
          >
            <Select.Option value='1'>1111</Select.Option>
            <Select.Option value='2'>1111</Select.Option>
          </Select>
        )}
        headerStyle={{padding: 0, border: 'none'}}
        footerStyle={{padding: 0, border: 'none'}}
        onChange={() => console.log('输入变化了')}
        onEnter={() => console.log('按了回车')}
      />
    </div>
  );
}
