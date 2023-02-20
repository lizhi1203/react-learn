import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // 组件挂载完成之后执行
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  // 组件卸载之前执行
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    const { date } = this.state;
    return (
      <div>
        <h3>classComponent</h3>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
