import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default connect(
  ({ user }) => ({ isLogin: user.isLogin })
)(
  function PrivateRoute({ isLogin, component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props => {
          isLogin ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: '/login', state: {from: props.location.pathname}}} />
          )
        }}
      />
    );
  }
)