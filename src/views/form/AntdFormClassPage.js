import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
const FormItem = Form.Item

const nameRules = {required: true, message: '请输入姓名'};
const passwordRules = {required: true, message: '请输入密码'};
export default class AntdFormClassPage extends Component {
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
        <h3>AntdFormClassPage</h3>
        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          onReset={this.onReset}
        >
          <FormItem label="姓名" name="name" rules={[nameRules]}>
            <Input placeholder="name input placeholder" />
          </FormItem>
          <FormItem label="密码" name="password" rules={[passwordRules]}>
            <Input placeholder="password input placeholder" />
          </FormItem>
          <FormItem>
            <Button type="primary" size="large" htmlType="submit">提交</Button>
          </FormItem>
          <FormItem>
          <Button type="primary" size="large" htmlType="reset">重置</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
