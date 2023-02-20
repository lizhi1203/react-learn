import React, { useEffect, useState } from 'react';

export default function FunctionComponent(props) {
  const [date, setDate] = useState(new Date);
  // useEffect副作用相当于componentDidMount, componentDidUpdate, componentWillUnMount的集合
  // 每次都执行
  // useEffect(() => {})
  // 依赖改变时执行
  // useEffect(() => {}, [])
  // 只执行一次
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => clearInterval(timer)
  }, [])
  return (
    <div>
      <h3>FunctionComponent</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}