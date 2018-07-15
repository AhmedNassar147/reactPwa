
import { createSelector } from 'reselect';

const selectUserProfile = (state) => state.get('userProfile');

const makeSelectUserInfo = () =>
  createSelector(selectUserProfile, (userProfileState) =>
    userProfileState.get('userInfo').toJS()
  );

const makeSelectUserInfoError = () =>
  createSelector(selectUserProfile, (userProfileState) =>
    userProfileState.get('error')
  );

const makeSelectUserInfoSuccess = () =>
  createSelector(selectUserProfile, (userProfileState) =>
    userProfileState.get('success')
  );

export { selectUserProfile, makeSelectUserInfo, makeSelectUserInfoError, makeSelectUserInfoSuccess };
