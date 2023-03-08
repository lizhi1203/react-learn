export default function createStore(reducer, enhancer) {
  let currentState = null;
  let currentListeners = [];

  if (enhancer) {
    return enhancer(createStore)(reducer)
  }
  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    currentListeners.push(listener);
    return () => {
      currentListeners = currentListeners.filter(item => item !== listener)
    }
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);
    currentListeners.forEach(listener => listener())
    return action;
  }
  dispatch({type: 'REDUX/KKKB'})
  return {
    getState,
    subscribe,
    dispatch
  }
}