import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

export default class Router5Page extends Component {
  render() {
    return (
      <div>
        <h3>Router5Page</h3>
        <Router>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          <Link to="/product/123">产品</Link>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/user" component={UserPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route component={EmptyPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    )
  }
}

class UserPage extends Component {
  render() {
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    )
  }
}

class EmptyPage extends Component {
  render() {
    return (
      <div>
        <h3>EmptyPage</h3>
      </div>
    )
  }
}

function ProductPage(props) {
  const { params, url } = props.match
  const { id } = params
  return (
    <div>
      <h3>ProductPage-{id}</h3>
      <Link to={url + '/detail'}>详情</Link>
      <Route path={url + '/detail'} component={Detail} />
    </div>
  );
}

function Detail({ match }) {
  return (
    <div>Detail</div>
  )
}
