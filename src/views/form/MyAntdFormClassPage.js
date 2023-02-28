import React, { Component } from 'react'
import Form, {Field} from '../../components/my-rc-field-form'
import Input from '../../components/Input'

const nameRules = {required: true, message: '请输入姓名'};
const passwordRules = {required: true, message: '请输入密码'};
export default class MyAntdFormClassPage extends Component {
  formRef = React.createRef()
  componentDidMount() {
    console.log('antd render:', this.formRef.current)
    this.formRef.current.setFieldsValue({name: 'default'})
  }

  onFinish = (val) => {
    console.log('onFinish:', val);
  }

  onFinishFailed = (val) => {
    console.log('onFinishFailed:', val);
  }

  onReset = () => {
    this.formRef.current.resetFields();
  }

  render() {
    return (
      <div>
        <h3>MyAntdFormClassPage</h3>
        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          onReset={this.onReset}
        >
          <Field label="姓名" name="name" rules={[nameRules]}>
            <Input placeholder="name input placeholder" />
          </Field>
          <Field label="密码" name="password" rules={[passwordRules]}>
            <Input placeholder="password input placeholder" />
          </Field>
          <Field>
            <button type="submit">提交</button>
          </Field>
          <Field>
          <button>重置</button>
          </Field>
        </Form>
      </div>
    )
  }
}
