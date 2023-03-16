import { createStore, applyMiddleware, combineReducers } from '../components/kredux';
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
// import promise from 'redux-promise'
import isPromise from 'is-promise'
import { counterReducer } from './counterReducer'

export function counterReducer2(state = {num: 0}, {type, payload}) {
  switch(type) {
    case 'ADD2':
      return {...state, num: state.num + payload};
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    count: counterReducer,
    count2: counterReducer2
  })
, applyMiddleware(thunk, logger, promise));
export default store;

function logger({getState}) {
  return next => action => {
    console.log('*******************');
    console.log(action.type + '执行了');
    const prevState = getState()
    console.log('prev state', prevState);

    const returnValue = next(action);
    const nextState = getState();
    console.log('next state', nextState);
    console.log('*******************');
    return returnValue;
  }
}

function thunk({getState, dispatch}) {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action)
  }
}

function promise({dispatch}) {
  return next => action => {
    return isPromise(action) ? action.then(dispatch) : next(action);
  }
}
