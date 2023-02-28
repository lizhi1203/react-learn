import React, { Component } from 'react'
import FieldContext from './FieldContext';

export default class Field extends Component {
  static contextType = FieldContext;
  componentDidMount() {
    const {registerEntity} = this.context;
    this.cancelRegister = registerEntity(this);
  }

  componentWillUnmount() {
    if (this.cancelRegister) {
      this.cancelRegister()
    }
  }

  onStoreChange = () => {
    this.forceUpdate();
  }

  getControlled = () => {
    const {name} = this.props;
    const { getFieldValue, setFieldsValue } = this.context;
    return {
      value: getFieldValue(name),
      onChange: (event) => {
        const newValue = event.target.value;
        setFieldsValue({
          [name]: newValue
        })
      }
    }
  }
  render() {
    const { children } = this.props
    return React.cloneElement(children, this.getControlled())
  }
}
