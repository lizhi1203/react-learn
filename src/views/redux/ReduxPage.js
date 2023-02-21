import React, { Component } from 'react'
import store from '../../store/index'

export default class ReduxPage extends Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log('state发生了改变')
      this.forceUpdate();
    })
  }

  render() {
    console.log('store', store);
    return (
      <div>
        <h3>reduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={() => store.dispatch({type: 'ADD'})}>Add</button>
      </div>
    )
  }
}
