
import { call, put, takeLatest } from 'redux-saga/effects';
import homeTypes from './constants';
import homeActions from './actions';

import { requestGetUsers } from 'utils/api';

// request for getting all users
export function* getUsers() {
  try {
    const Users = yield call(requestGetUsers);
    yield put(homeActions.getUsersSuccess(Users.data));
  } catch (err) {
    yield put(homeActions.getUsersError(err));
  }
}

export default function* usersData() {
  yield takeLatest(homeTypes.GET_USERS, getUsers);
}
