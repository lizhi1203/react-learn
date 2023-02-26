import React, { Component } from 'react'
import { Button } from 'antd';
import Dialog from '../../components/Dialog'

export default class DialogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false
    };
  }
  render() {
    let { showDialog } = this.state;
    return (
      <div>
        <h3>DialogPage</h3>
        <Button type="primary" onClick={() => this.setState({showDialog: !showDialog})}>Toggle</Button>
        {showDialog && <Dialog />}
      </div>
    )
  }
}
