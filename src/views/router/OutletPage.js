import React, { Component } from 'react';
import { Outlet, Route, Routes, Link } from 'react-router-dom';

export default function OutletPage(props) {
  return (
    <div>
      <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

class LayoutPage extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/about">关于</Link></li>
            <li><Link to="/dashboard">看板</Link></li>
          </ul>
        </nav>
        <Outlet />
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

class AboutPage extends Component {
  render() {
    return (
      <div>
        <h3>AboutPage</h3>
      </div>
    )
  }
}

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <h3>DashboardPage</h3>
      </div>
    )
  }
}


class NoMatch extends Component {
  render() {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    )
  }
}





