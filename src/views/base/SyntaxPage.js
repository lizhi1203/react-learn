import logo from "../../logo.svg"
import styles from './index.module.css'
export default function SyntaxPage() {
  const name = "React";
  const obj = {
    firstName: 'li',
    lastName: 'zhi'
  }
  function formatName() {
    return obj.firstName + "." + obj.lastName;
  }

  const greet = <div>good</div>

  const show = true;

  const arr = ["吃饭", "学习", "工作", "睡觉"];
  return (
    <>
      {/* 表达式 */}
      <div>hello, {name}</div>
      {/* 函数 */}
      <div>{formatName(obj)}</div>
      {/* jsx对象 */}
      {greet}
      {/* 条件语句 */}
      {show ? greet : "全量"}
      {show && greet}
      {/* 数组 */}
      <ul>
        {arr.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
      <img src={logo} className={styles.logo} alt="" />
    </>
  )
}