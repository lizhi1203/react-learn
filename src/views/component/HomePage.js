import React, { Component } from 'react'
import Layout from './Layout'

export default class HomePage extends Component {
  render() {
    return (
      <Layout showTopBar={true} showBottomBar={true} title="商城首页">
        {
          {
            // jsx
            content: (
              <div>
                <h3>HomePage</h3>
              </div>
            ),
            txt: '这是一个文本',
            btnClick: () => {console.log('btnClick')}
          }
        }
      </Layout>
    )
  }
}
