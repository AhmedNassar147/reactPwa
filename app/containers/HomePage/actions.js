import homeTypes from './constants';
const { GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS } = homeTypes;

export default {
  // request fetch all users
  getUsers: () => ({
    type: GET_USERS,
  }),

  // pass the users to reducer
  getUsersSuccess: (users) => ({
    type: GET_USERS_SUCCESS,
    users,
  }),

  // pass request error to reducer
  getUsersError: (error) => ({
    type: GET_USERS_ERROR,
    error,
  }),

};