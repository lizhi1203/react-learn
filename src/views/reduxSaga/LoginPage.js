import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { login } from '../../action/user'
export default connect(
  ({user}) => ({
    isLogin: user.isLogin,
    loading: user.loading,
    err: user.err
  }),
  {
    login
  }
)(
  class LoginPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      };
    }

    nameChange = event => {
      this.setState({
        name: event.target.value
      })
    }

    render() {
      const { login, isLogin, loading, location, err } = this.props
      if (isLogin) {
        const { from = '/' } = location.state || {}
        return <Redirect to={{ pathname: from }} />
      }
      const { name } = this.state
      return (
        <div>
          <h3>LoginPage</h3>
          <input onChange={this.nameChange} value={name} />
          <p className="red">{err.msg}</p>
          <button onClick={() => login({name})}>{loading ? 'loading...' : '登录'}</button>
        </div>
      )
    }
  }
)
