import React, { useEffect } from 'react';
import Form, {Field} from 'rc-field-form'
import Input from '../../components/Input'

const nameRules = {required: true, message: '姓名不能为空'};
const passwordRules = {required: true, message: '密码不能为空'};
export default function MyAntdFormFuncPage(props) {
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
        <Field label="姓名" name="name" rules={[nameRules]}>
            <Input placeholder="name input placeholder" />
          </Field>
          <Field label="密码" name="password" rules={[passwordRules]}>
            <Input placeholder="password input placeholder" />
          </Field>
          <Field>
            <button>提交</button>
          </Field>
          <Field>
          <button>重置</button>
          </Field>
      </Form>
    </div>
  );
}