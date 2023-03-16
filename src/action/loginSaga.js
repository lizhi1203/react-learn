// redux-saga是一个用于管理应用程序的副作用的库，类比redux-thunk
// 监听 takeEvery
// 调用异步操作 call
// 状态更新(dispatch) put

import {call, put, takeEvery} from 'redux-saga/effects'
import LoginService from '../service/user'

// worker saga
function *loginHandle(action) {
  yield put({type: 'REQUEST'})
  try {
    const res1 = yield call(LoginService.login, action.payload)
    const res2 = yield call(LoginService.getMoreUserInfo, res1)
    yield put({ type: 'LOGIN_SUCCESS', payload: {...res2} })
  } catch(err) {
    yield put({type: 'LOGIN_FAILURE', payload: err})
  }
}

// watcher saga
function *loginSaga(props) {
  yield takeEvery('LOGIN_SAGA', loginHandle)
}

export default loginSaga;