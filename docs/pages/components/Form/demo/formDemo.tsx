import * as React from 'react';
import { Form, Input, Button } from '@yoshino/components/';

const Validator = Form.Validator;

export default class extends React.Component {
  form: Form;

  state = {
    v: {}
  };

  render() {
    return (
      <div style={{maxWidth: 800}}>
        <Form
          onChange={(v) => {
            this.setState({v});
          }}
          ref={(v) => {
            if (v) {
              this.form = v;
            }
          }}
        >
          <Validator
            name='nickname'
            label='昵称'
            required
          >
            <Input/>
          </Validator>
          <Validator
            name='phone'
            label='手机号'
            message='自定义信息：phone不为空'
            checkers={[(v) => {
              if (v.length === 11) {
                return true;
              } else {
                return '手机号长度应为11位';
              }
            }]}
            required
          >
            <Input/>
          </Validator>
        </Form>
        <div>{JSON.stringify(this.state.v)}</div>
        <Button type='primary' onClick={() => this.form.check()}>check</Button>
      </div>
    );
  }
}
