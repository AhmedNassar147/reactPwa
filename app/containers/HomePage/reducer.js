import { fromJS } from 'immutable';
import homeTypes from './constants';

const { GET_USERS_SUCCESS, GET_USERS, GET_USERS_ERROR } = homeTypes;

// The initial state of home page
const initialState = fromJS({
  loading: false,
  error: false,
  users: [],
});

function homeReducer(state = initialState, action) {
  const oldState = state.toJS();
  switch (action.type) {
    case GET_USERS:
      return state.merge({ loading: true, error: false, users: [] });

    case GET_USERS_SUCCESS:
      return state.merge({
        users: [...oldState.users, ...action.users],
        loading: false,
        error: false,
      });

    case GET_USERS_ERROR:
      return state.merge({ error: action.error, loading: false });
    default:
      return state;
  }
}

export default homeReducer;
