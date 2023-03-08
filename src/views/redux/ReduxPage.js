import React, { Component } from 'react'
import store from '../../store/index'

export default class ReduxPage extends Component {
  componentDidMount() {
    this.unsubstribe = store.subscribe(() => {
      console.log('state发生了改变')
      this.forceUpdate();
    })
  }

  componentWillUnmount() {
    if (this.unsubstribe) {
      this.unsubstribe()
    }
  }

  add = () => {
    store.dispatch({type: 'ADD'})
  }

  minus = () => {
    store.dispatch({type: 'MINUS'})
  }

  asyncAdd = () => {
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({type: 'ADD'})
        console.log('asyncAdd', getState())
      }, 1000)
    })
  }

  promiseMinus = () => {
    store.dispatch(
      Promise.resolve({
        type: 'MINUS',
        payload: 100
      })
    )
  }

  render() {
    console.log('store', store);
    return (
      <div>
        <h3>reduxPage</h3>
        <p>{store.getState().count}</p>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.asyncAdd}>asyncAdd</button>
        <button onClick={this.promiseMinus}>promiseMinus</button>
      </div>
    )
  }
}
