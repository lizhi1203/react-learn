import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import HomePage from './HomePage'
import UserPage from './UserPage'
import LoginPage from './LoginPage'
import PrivateRoute from './PrivateRoute';

export default function ReduxSagaPage(props) {
  return (
    <div>
      <h3>ReduxSagaPage</h3>
      <Router>
        <Link to="/">首页</Link>
        <Link to="/user">用户中心</Link>
        <Link to="/login">登录</Link>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/login" component={LoginPage} />
          <Route path="/user" component={UserPage} />
        </Switch>
      </Router>
    </div>
  );
}