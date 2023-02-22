import React, { Component } from 'react'

export default class LifeCycle164Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  static getDerivedStateFormProps(props, state) {
    console.log('getDerivedStateFromProps')
    const { count } = state;
    return count > 5 ? { count: 0 } : null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('getSnapshotBeforeUpdate')
    return {
      msg: '我是getSnapshotBeforeUpdate'
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot)
  }

  setCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>LifeCycle164Page</h3>
        <p>{count}</p>
        <button onClick={this.setCount}>改变state</button>
      </div>
    )
  }
}
