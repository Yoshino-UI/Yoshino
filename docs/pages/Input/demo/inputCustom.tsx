import * as React from 'react';
import Input  from '../../../../components/Input';
import Button from '../../../../components/Button';

export default function () {
  return (
    <div>
      <Input
        style={{width: '500px'}}
        header={<Button type="primary" style={{width: '80px', height: '32px', borderRadius: 0}}>头部</Button>}
        headerStyle={{padding: 0, border: 'none'}}
        footer={<Button type="primary" style={{width: '100px', height: '32px', borderRadius: 0}}>尾部</Button>}
        footerStyle={{padding: 0, border: 'none'}}
        onChange={() => console.log('输入变化了')}
        onEnter={() => console.log('按了回车')}
      />
    </div>
  )
}
