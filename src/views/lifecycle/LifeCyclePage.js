import React, { Component } from 'react'

export default class LifeCyclePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('constructor')
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate:', nextProps, nextState)
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  setCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    console.log('render', this.props)
    const { count } = this.state
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <p>{count}</p>
        <button onClick={this.setCount}>改变state</button>
        {/* {count % 2 && <Child count={count} />} */}
        <Child count={count} />
      </div>
    )
  }
}

class Child extends Component {
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps)
  }

  render() {
    const { count } = this.props
    return (
      <div>
        <h3>Child</h3>
        <p>{count}</p>
      </div>
    )
  }
}

