import React, { Component } from 'react'
import { connect } from 'react-redux'

export default connect(
  // mapStateToProps
  state => ({num: state}),
  // mapDispatchToProps
  {
    add: () => ({type: 'ADD'})
  }
)(
  class ReactReduxPage extends Component {
    render() {
      console.log(this.props)
      const { num, add ,dispatch } = this.props
      return (
        <div>
          <h3>ReactReduxPage</h3>
          <p>{num}</p>
          <button onClick={add}>add</button>
        </div>
      )
    }
  }
)
