import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {loginReducer} from './loginReducer'
import rootSaga from '../action/rootSaga'

// 创建
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers({user: loginReducer}),
  applyMiddleware(sagaMiddleware)
);
// 运行
sagaMiddleware.run(rootSaga);
export default store;