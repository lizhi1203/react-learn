import React, { Component } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const menu = [
  {title: '首页', icon: 'shouye', link: '/'},
  {title: '用户中心', icon: 'wode', link: '/user'},
  {title: '购物车', icon: 'gouwuche', link: '/login'}
]

// export default class index extends Component {
//   render() {
//     const { activeNum, setActiveNum } = this.props;
//     return (
//       <div className={styles.main}>
//         {menu.map((item, index) => (
//           <MenuItem
//             key={item.link}
//             {...item}
//             active={activeNum === index}
//             onClick={() => setActiveNum(index)}
//           />
//         ))}
//       </div>
//     )
//   }
// }

// function MenuItem({title, icon, active, onClick}) {
//   return (
//     <div 
//     className={(active ? styles.selected + " " : '') + styles.menuItem}
//     onClick={onClick}
//     >
//     <span className={"iconfont icon-" + icon}></span>
//     <span className={styles.title}>{title}</span>
//   </div>
//   );
// }

export default class BottomNav extends Component {
  render() {
    return (
      <div className={styles.main}>
        {menu.map(item => (
          <MenuItem key={item.key} {...item} />
        ))}
      </div>
    )
  }
}

function MenuItem(props) {
  return (
    <li className="menuItem">
      <span className={"iconfont icon-" + props.icon}></span>
      <Link to={props.link}>{props.title}</Link>
    </li>
  )
}

