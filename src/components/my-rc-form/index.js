import React, {Component} from 'react'
export function createForm(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.options = {};
    }

    setFieldsValue = (newStore) => {
      this.setState(newStore);
    }

    getFieldsValue = () => {
      return {...this.state}
    }

    getFieldValue = (fieldName) => {
      return this.state[fieldName];
    }

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    getFieldDecorator = (fieldName, options) => InputCmp => {
      this.options[fieldName] = options;
      // 扩展组件属性
      return React.cloneElement(InputCmp, {
        name: fieldName,
        value: this.state[fieldName] || '',
        onChange: this.handleChange
      })
    }

    validateFields = callbacks => {
      var err = [];
      for (let fieldName in this.options) {
        if (this.state[fieldName] === undefined) {
          err.push({
            [fieldName]: 'error'
          })
        }
      }
      if (err.length === 0) {
        callbacks(null, {...this.state})
      } else {
        callbacks(err, {...this.state})
      }
    }

    getForm = () => {
      return {
        setFieldsValue: this.setFieldsValue,
        getFieldsValue: this.getFieldsValue,
        getFieldValue: this.getFieldValue,
        getFieldDecorator: this.getFieldDecorator,
        validateFields: this.validateFields
      }
    }

    render() {
      const form = this.getForm();
      return <Cmp {...this.props} form={form} />
    }
  }
}