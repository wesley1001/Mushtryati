import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants/ActionTypes';

const initialState = {
  isLoggedIn: false,
  isFetching: false,
  error: null
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ... state,
        isFetching: true,
        isLoggedIn: false,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ... state,
        isFetching: false,
        isLoggedIn: true,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        error: action.error
      };
    default:
      return state;
  }
}


