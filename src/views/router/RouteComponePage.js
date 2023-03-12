import React, { Component, useEffect } from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'

export default class RouteComponePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h3>RouteComponePage</h3>
        <button onClick={() => this.setState({count: count + 1})}>click change count {count}</button>
        <Router>
          {/* component内联函数形式会导致重复的加载和卸载 */}
          {/* <Route component={() => <Child count={count} />} /> */}
          {/* render/children形式内联函数形式不会重复的加载和卸载 */}
          {/* <Route children={() => <Child count={count} /> } /> */}
          <Route render={() => <Child count={count} /> } />
        </Router>
      </div>
    )
  }
}

class Child extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
      <div>
        <h3>Child-{this.props.count}</h3>
      </div>
    )
  }
}

function ChildFunction(props) {
  useEffect(() => {
    console.log('didMount')
    return () => {
      console.log('WillUnmount');
    }
  }, [])
  return (
    <div>
      <h3>ChildFunction-{props.count}</h3>
    </div>
  );
}

