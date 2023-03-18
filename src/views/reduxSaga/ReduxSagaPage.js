import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import HomePage from './HomePage'
import UserPage from './UserPage'
import LoginPage from './LoginPage'
import PrivateRoute from './PrivateRoute';
import _404Page from './_404Page'
import BottomNav from '../../components/BottomNav'

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/user',
    component: UserPage,
    auth: PrivateRoute
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    component: _404Page
  }
]
export default function ReduxSagaPage(props) {
  return (
    <div>
      <h3>ReduxSagaPage</h3>
      <Router>
        <BottomNav />

        <Switch>
          {/* <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/login" component={LoginPage} />
          <Route path="/user" component={UserPage} /> */}
          {routes.map(Route_ => 
            Route_.auth ? (
              <Route_.auth key={Route_.key + 'route'} {...Route_} />
            ) : (
              <Route key={Route_.path + "route"} {...Route_} />
            )
          )}
        </Switch>
      </Router>
    </div>
  );
}