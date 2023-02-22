import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="*" element={<EmptyPage />} />
          </Routes>
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




