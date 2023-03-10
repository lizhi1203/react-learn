export default function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;

    const midApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    }

    const middlewareChain = middlewares.map(middleware => middleware(midApi));
    dispatch = compose(...middlewareChain)(dispatch);
    return {
      ...store,
      dispatch
    }
  }
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return args => args;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
// (...args) => f1(f2(...args))
// (...args) => f1(f2(...args))(f3(...args))
// f1(f2(f3(args)))