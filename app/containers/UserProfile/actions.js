import profileTypes from './constants';
const {
  USER_FORM_CHNGED,
  SET_VALIDATION_ERROR,
  CLEAR_ERRORS,
  GET_USER_DATA,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  UPDATE_USER_DATA,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_ERROR
} = profileTypes;

export default {
  // when user form input change
  userFormChanged: ({ inpName, inpValue }) => ({
    type: USER_FORM_CHNGED,
    inpName,
    inpValue
  }),

  // validate user form
  validateForm: (error) => ({
    type: SET_VALIDATION_ERROR,
    error,
  }),

  // clear form error
  clearErrors: () => ({
    type: CLEAR_ERRORS,
  }),

  // request select user
  getUserData: (id) => ({
    type: GET_USER_DATA,
    id,
  }),

  // get returned user data when trying select user
  getUserDataSuccess: (userData) => ({
    type: GET_USER_DATA_SUCCESS,
    userData,
  }),

  // set the error when trying select user
  getUserDataError: (error) => ({
    type: GET_USER_DATA_ERROR,
    error,
  }),

  // update user
  updateUserData: (newUserData) => ({
    type: UPDATE_USER_DATA,
    newUserData,
    loading: true,
  }),

  // if user updated successfully
  userUpdated: (success) => ({
    type: UPDATE_USER_DATA_SUCCESS,
    success,
    loading: false,
  }),

  // if there are errors when form update
  updateUserFailed: (error) => ({
    type: UPDATE_USER_DATA_ERROR,
    error,
    loading: false,
  })
}

