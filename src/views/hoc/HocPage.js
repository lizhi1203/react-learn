import React, { Component } from 'react'

const foo = Cmp => props => {
  return (
    <div className="border">
      <Cmp {...props} omg="omg" />
    </div>
  )
}

function Child(props) {
  return <div>Child</div>
}

const Foo = foo(foo(Child));
export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Foo />
      </div>
    )
  }
}
