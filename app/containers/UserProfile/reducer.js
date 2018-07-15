import { fromJS } from 'immutable';
import profileTypes from './constants';
const {
  CLEAR_ERRORS,
  GET_USER_DATA,
  GET_USER_DATA_ERROR,
  GET_USER_DATA_SUCCESS,
  SET_VALIDATION_ERROR,
  UPDATE_USER_DATA,
  UPDATE_USER_DATA_ERROR,
  UPDATE_USER_DATA_SUCCESS,
  USER_FORM_CHNGED
} = profileTypes;

const initialState = fromJS({
  userInfo: {},
  error: {},
  loading: false,
  success: {},
});

function userInfoReducer(state = initialState, action) {
  const oldState = state.toJS();
  switch (action.type) {
    case GET_USER_DATA_SUCCESS:
      return state.merge({ userInfo: action.userData });

    case GET_USER_DATA_ERROR:
      return state.merge({ error: action.error });

    case USER_FORM_CHNGED:
      return state.merge({
        userInfo: { ...oldState.userInfo, [action.inpName]: action.inpValue },
        error: false,
      });

    case SET_VALIDATION_ERROR:
      return state.merge({ error: action.error });

    case CLEAR_ERRORS:
      return state.merge({ error: false, success: false });

    case UPDATE_USER_DATA_SUCCESS:
      return state.merge({ success: action.success, loading: false });

    case UPDATE_USER_DATA_ERROR:
      return state.merge({ error: action.error, loading: false });

    default:
      return state;
  }
}

export default userInfoReducer;
