import React, { Component, PureComponent } from 'react'

export default class PureComponentPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      // 浅比较只能是对象的第1层，多层失效
      obj: {
        num: 0
      }
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.count !== this.state.count;
  // }

  setCount = () => {
    this.setState({
      count: 100,
      obj: {
        num: 1000
      }
    })
  }
  
  render() {
    console.log('render');
    return (
      <div>
        <h3>PureComponentPage</h3>
          <button onClick={this.setCount}>{this.state.count}</button>
      </div>
    )
  }
}