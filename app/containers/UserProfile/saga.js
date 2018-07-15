import { takeLatest, call, put } from 'redux-saga/effects';
import { selectUserById, requestUpdateSelectedUser } from 'utils/api';
import profileTypes from './constants';
import profileActions from './actions';
const {
  getUserDataSuccess,
  getUserDataError,
  userUpdated,
  updateUserFailed
} = profileActions;

// request select user by id
export function* getUserData(action) {
  const userId = action.id;
  try {
    const userData = yield call(selectUserById, userId);
    yield put(getUserDataSuccess(userData.data));
  } catch (err) {
    err.response.status === 404 ?
      yield put(getUserDataError({ user: 'user not found' })) :
      yield put(getUserDataError(err));
  }
}

// request update user data
export function* updateUserData(action) {
  const user = action.newUserData;
  try {
    yield call(requestUpdateSelectedUser, user);
    yield put(userUpdated({
      success: true,
      msg: 'user updated successfully',
    }));
  } catch (err) {
    yield put(updateUserFailed(err));
  }
}

export default function* userInfoData() {
  yield takeLatest(profileTypes.GET_USER_DATA, getUserData);
  yield takeLatest(profileTypes.UPDATE_USER_DATA, updateUserData);
}
