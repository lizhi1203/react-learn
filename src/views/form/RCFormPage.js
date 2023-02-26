import React, { Component } from 'react'
import { createForm } from 'rc-form'
import Input from '../../components/Input'

const nameRules = {required: true, message: '请输入用户名'};
const passwordRules = {required: true, message: '请输入密码'};

@createForm()
export default class RCFormPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { setFieldsValue } = this.props.form;
    setFieldsValue({username: 'Default'})
  }

  submit = () => {
    // const { getFieldValue, getFieldsValue } = this.props.form;
    // console.log('submit:', getFieldValue('username'), getFieldValue('password'), getFieldsValue())
    const { validateFields } = this.props.form;
    validateFields((err, vals) => {
      if (err) {
        console.log('失败', err);
      } else {
        console.log('成功', vals);
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <h3>RCFormPage</h3>
        {getFieldDecorator('username', {rules: [nameRules]})(
          <Input placeholder="Username" />
        )}
        {getFieldDecorator('password', {rules: [passwordRules]})(
          <Input placeholder="Password" />
        )}
        <button onClick={this.submit}>Submit</button>
      </div>
    )
  }
}
