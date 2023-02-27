import React, { Component } from 'react'
import { ThemeContext } from './Context';


export default class HomePage extends Component {
  static contextType = ThemeContext;
  render() {
    const { themeColor} = this.context;
    return (
      <div>
        <h3 className={themeColor}>HomePage</h3>
      </div>
    )
  }
}

// HomePage.contextType = ThemeContext
