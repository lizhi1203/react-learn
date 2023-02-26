import React, { PureComponent, useCallback, useState } from 'react';

export default function UseCallbackPage(props) {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')

  const addClick = useCallback(() => {
    console.log('computed')
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum
  }, [count])

  return (
    <div>
      <h3>UseCallback</h3>
      <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <Child addClick={addClick} />
    </div>
  );
}
// 使用useCllback和PureComponent避免input输入的非必要的子组件渲染
class Child extends PureComponent {
  render() {
    console.log('child render')
    const { addClick } = this.props;
    return (
      <div>
        <h3>Child</h3>
        <button onClick={() => console.log(addClick())}>add</button>
      </div>
    )
  }
}