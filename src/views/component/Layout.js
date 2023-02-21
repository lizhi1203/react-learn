import React, { Component } from 'react'
import TopBar from '../../components/TopBar'
import BottomBar from '../../components/BottomBar'

export default class Layout extends Component {
  constructor(props) {
    super(props);
    const { title = '商城' } = props;
    document.title = title;
  }
  render() {
    const { children, showTopBar, showBottomBar } = this.props;
    return (
      <div>
        { showTopBar && <TopBar /> }
        { children.content }
        { children.txt }
        <button onClick={children.btnClick}>button</button>
        { showBottomBar && <BottomBar /> }
      </div>
    )
  }
}
