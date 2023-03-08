import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ReactReduxHookPage(props) {
  const count = useSelector(({count}) => count);
  const dispatch = useDispatch();

  const add = useCallback(() => {
    console.log('add')
    dispatch({type: 'ADD'})
  }, [])
  return (
    <div>
      <h3>ReactReduxHookPage</h3>
      <p>{count}</p>
      <button onClick={add}>Add</button>
    </div>
  );
}