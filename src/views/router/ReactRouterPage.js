import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route,useRouteMatch, useHistory, useLocation, useParams, withRouter } from '../../components/KReactRouterDom'

export default class ReactRouterPage extends Component {
  render() {
    return (
      <div>
        <h3>ReactRouterPage</h3>
        <Router>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          <Link to="/login">登录</Link>
          <Link to="/product/123">商品</Link>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/user" component={UserPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route component={_404Page} />
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

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h3>LoginPage</h3>
      </div>
    )
  }
}

// function ProductPage(props) {
//   const { url, params } = useRouteMatch()
//   const { id } = useParams()
//   console.log(useHistory())
//   console.log(useLocation())
//   return (
//     <div>
//       <h3>ProductPage-{id}</h3>
//       <Link to={url + '/detail'}>详情</Link>
//       <Route path={url + '/detail'} component={DetailPage}/>
//     </div>
//   );
// }

@withRouter
class ProductPage extends Component {
  render() {
    const { url, params } = this.props.match;
    const { id } = params
    return (
      <div>
        <h3>ProductPage-{id}</h3>
        <Link to={url + '/detail'}>详情</Link>
        <Route path={url + '/detail'} component={DetailPage} />
      </div>
    )
  }
}


function DetailPage(props) {
  return (
    <div>
      <h3>Detail</h3>
    </div>
  );
}

function _404Page(props) {
  return (
    <div>
      <h3>404Page</h3>
    </div>
  );
}



