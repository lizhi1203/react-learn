import React, { Component } from 'react'
import ConsumerPage from './ConsumerPage';
import { ThemeProvider, UserProvider } from './Context';
import HomePage from './HomePage';

export default class ConextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: 'red'
      },
      user: {
        name: 'my name is lizhi'
      }
    };
  }
  render() {
    const { theme, user } = this.state;
    return (
      <div>
        <h3>ConextPage</h3>
        <ThemeProvider value={theme}>
          <UserProvider value={user}>
            <ConsumerPage />
          </UserProvider>
        </ThemeProvider>
      </div>
    )
  }
}
