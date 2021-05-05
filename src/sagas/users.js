import { takeEvery } from 'redux-saga/effects'
import * as actions from '../actions/users'

function* getUsers() {
  try {
    yield console.log('run')
  } catch (e) {
    console.log('error:', e)
  }
}

export function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USER_REQUEST, getUsers)
}
