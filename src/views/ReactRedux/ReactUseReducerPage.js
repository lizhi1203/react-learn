import React, { useReducer } from 'react';
import { counterReducer } from '../../store/counterReducer'

const init = initArgs => {
  return initArgs - 0;
}
export default function ReactUseReducerPage(props) {
  const [state, dispatch] = useReducer(counterReducer, "0", init)
  return (
    <div>
      <h3>ReactUseReducerPage</h3>
      <p>{state}</p>
      <button onClick={() => dispatch({type: 'ADD'})}>Add</button>
    </div>
  );
}