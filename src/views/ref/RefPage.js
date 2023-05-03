import React, { Component, useRef } from 'react'

export default class RefPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.nameInputRef = React.createRef();
    this.passwordRef = React.createRef();
    this.ageInputRef = React.createRef();
    
  }
  getInputValue = () => {
    console.log('用户名:', this.nameInputRef.current.value)
    console.log('密码:', this.passwordRef.current.getPassword())
    console.log('年龄:', this.ageInputRef.current.value)
  }
  render() {
    const AgeWithInput = React.forwardRef(AgeInput)
    return (
      <div>
        <h3>RefPage</h3>
        <input ref={this.nameInputRef} />
        <PasswordInput label="密码" ref={this.passwordRef} />
        <AgeWithInput label="年龄" ref={this.ageInputRef} />
        <BirthInput />
        <CityInput />
        <button onClick={this.getInputValue}>获取</button>
      </div>
    )
  }
}

class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.passwordInputRef = React.createRef()
  }

  getPassword() {
    return this.passwordInputRef.current.value
  }
  render() {
    return (
      <div className="border">
        <label htmlFor="">{this.props.label}</label>
        <input type="text" ref={this.passwordInputRef} />
      </div>
    )
  }
}

function AgeInput(props, ref) {
  return (
    <div className="border">
      <label htmlFor="">{props.label}</label>
      <input type="text" ref={ref} />
    </div>
  )
}

class BirthInput extends Component {
  constructor(props) {
    super(props);
    this.birthInput = null
  }

  componentDidMount() {
    this.birthInput.value = '123';
    this.birthInput.focus();
  }
  setTextInputRef = ele => {
    this.birthInput = ele
  }
  render() {
    return (
      <input type="text" ref={this.setTextInputRef} />
    )
  }
}

function CityInput(props) {
  const cityInputRef = useRef(null)
  return (
    <div className="border">
      <label htmlFor="">城市:</label>
      <input type="text" ref={cityInputRef} />
      <button onClick={() => {
        let val = cityInputRef.current.value
        console.log('city:', val)
      }}>城市</button>
    </div>
  )
}


