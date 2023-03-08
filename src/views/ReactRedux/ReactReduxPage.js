import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { connect, bindActionCreators } from '../../components/KReactRedux/index'
export default connect(
  // mapStateToProps
  ({count}) => ({count}),
  // mapDispatchToProps
  // object
  // {
  //   add: () => ({ type: 'ADD' }),
  //   minus: () => ({ type: 'MINUS' })
  // }
  // function
  (dispatch) => {
    // const add = () => dispatch({type: 'ADD'});
    // const minus = () => dispatch({type: 'MINUS'})
    // return { add, minus }
    let creators = {
      add: () => ({type: 'ADD'}),
      minus: () => ({type: 'MINUS'})
    }

    creators = bindActionCreators(creators, dispatch);
    return {...creators}
  }
)(class ReactReduxPage extends Component {
  render() {
    const { add, minus, count } = this.props
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{count}</p>
        <button onClick={add}>Add</button>
        <button onClick={minus}>Minus</button>
      </div>
    )
  }
})
