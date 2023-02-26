import React, { useState } from 'react';
import { useClock } from './useClock'

export default function HookPage(props) {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <p>{useClock().toLocaleTimeString()}</p>
      <button onClick={() => {setCount(count + 1)}}>Add</button>
    </div>
  );
}