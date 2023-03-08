import React, { useContext, useLayoutEffect, useReducer } from 'react';

const Context = React.createContext();

export const connect = (
  mapStateToProps = state => state,
  mapDispatchToProps
) => WrappedComponent => props => {
  const store = useContext(Context);
  const { getState, dispatch, subscribe } = store;
  const stateProps = mapStateToProps(getState());

  // ??
  let dispatchProps = {dispatch};

  if (typeof mapDispatchToProps === 'function') {
    dispatchProps = mapDispatchToProps(dispatch);
  } else if (typeof mapDispatchToProps === 'object') {
    dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
  }

  const [ ,forceUpdate] = useReducer(x => x + 1, 0)
  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate()
    })
    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [store]);
  return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />
}

export function Provider({store, children}) {
  <Context.Provider value={store}>{children}</Context.Provider>
}

function bindActionCreator(creator, dispatch) {
  // (...args) => dispatch((()=> ({type: 'ADD'}))(...args))
  return (...args) => dispatch(creator(...args));
}

export function bindActionCreators(creators, dispatch) {
  const obj = {};
  for (let key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }
  return obj;
}

export function useSelector(selector) {
  const store = useStore();
  const { getState, subscribe } = store;
  const selectedState = selector(getState());

  const [ ,forceUpdate] = useReducer(x => x + 1, 0)
  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate()
    })
    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [store]);
  return selectedState;
}

export function useDispatch() {
  const store = useStore();
  return store.dispatch;
}

function useStore() {
  const store = useContext(Context);
  return store;
}