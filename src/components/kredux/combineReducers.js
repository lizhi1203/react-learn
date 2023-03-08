// combination在dispatch的reducer(currentState, action)方法调用，如下所示
// combination(state={}, action)(currentState, action)
// 第1次调用createStore(combineReducers({count: counterReducer,count2: counterReducer2}, applyMiddleware())
export default function combineReducers(reducers) {
  // 按收一个reducers对象返回一个总的reducer
  // 第2次调用dispatch({type: 'REDUX/KKKB'})
  return function combination(state = {}, action) {
    let nextState = {};
    state = state === null ? {} : state;
    let hasChanged = false;
    for (let key in reducers) {
      const reducer = reducers[key];
      nextState[key] = reducer(state[key], action);
      hasChanged = hasChanged || nextState[key] !== state[key]
    }
    // 上面判断不能区分如下state与nextState是否有改变
    // {a: 1, b: 2}
    // {a: 1}
    hasChanged = 
      hasChanged || Object.keys(nextState).length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}