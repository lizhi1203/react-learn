import React, { useEffect } from 'react';
import { Form, Button, Input } from 'antd';
const FormItem = Form.Item;

const nameRules = {required: true, message: '姓名不能为空'};
const passwordRules = {required: true, message: '密码不能为空'};
export default function AntdFormFuncPage(props) {
  const [form] = Form.useForm()

  const onFinish = val => {
    console.log('onFinish:', val)
  }

  const onFinishFailed = val => {
    console.log('onFinishedFailed:', val)
  }

  const onReset = () => {
    form.resetFields()
  }

  useEffect(() => {
    form.setFieldsValue({name: 'default'})
  }, [])
  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onReset={onReset}
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
  );
}