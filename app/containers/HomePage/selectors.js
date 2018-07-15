import { createSelector } from 'reselect';

const selectHomeDomain = (state) => state.get('home');


const makeSelectUsers = () => createSelector(
  selectHomeDomain, (homeState) => homeState.get('users').toJS()
);

const makeSelectLoading = () => createSelector(
  selectHomeDomain, (homeState) => homeState.get('loading')
);

const makeSelectError = () => createSelector(
  selectHomeDomain, (homeState) => homeState.get('error')
);

export {
  makeSelectUsers,
  makeSelectLoading,
  makeSelectError,
};
