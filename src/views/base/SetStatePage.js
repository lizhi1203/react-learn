import React, { Component } from 'react'

export default class SetStatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    // this.changeValue(1)
    document.getElementById('test').addEventListener('click', this.setCounter)
  }

  // 第1种：setState在合成事件和生命周期(componentDidMount等)中是异步的，这里说的异步其实是批量更新，达到了性能优化的目的
  // changeValue = (v) => {
  //   this.setState({
  //     counter: this.state.counter + v
  //   })
  //   console.log('changeValue:', this.state.counter)
  // }

  // 第3种：setState(partial, ()=> {})也是同步的
  changeValue = v => {
    this.setState((state) => {
      return {
        counter: state.counter + v
      }
    }, () => {
      console.log('changeValue:', this.state.counter)
    })
  }

  // 第2种setState在setTimeout和原生事件中是同步的
  // setCounter = () => {
  //   setTimeout(() => {
  //     this.changeValue(1)
  //   }, 0)
  // }

  setCounter = () => {
    this.changeValue(1)
    this.changeValue(1)
  }
  render() {
    return (
      <div>
        <h3>SetStatePage</h3>
        {/* 合成事件 */}
        <div onClick={this.setCounter}>合成事件{this.state.counter}</div>
        {/* 原生事件 */}
        <div id="test">原生事件{this.state.counter}</div>
      </div>
    )
  }
}
