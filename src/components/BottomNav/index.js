import React, { Component } from 'react'
import styles from './index.module.css'

const menu = [
  {title: '首页', icon: 'shouye', link: '/'},
  {title: '购物车', icon: 'gouwuche', link: '/cart'},
  {title: '订单列表', icon: 'dingdan-copy', link: '/orderlist'},
  {title: '用户中心', icon: 'wode', link: '/user'}
]

export default class index extends Component {
  render() {
    const { activeNum, setActiveNum } = this.props;
    return (
      <div className={styles.main}>
        {menu.map((item, index) => (
          <MenuItem
            key={item.link}
            {...item}
            active={activeNum === index}
            onClick={() => setActiveNum(index)}
          />
        ))}
      </div>
    )
  }
}

function MenuItem({title, icon, active, onClick}) {
  return (
    <div 
    className={(active ? styles.selected + " " : '') + styles.menuItem}
    onClick={onClick}
    >
    <span className={"iconfont icon-" + icon}></span>
    <span className={styles.title}>{title}</span>
  </div>
  );
}
