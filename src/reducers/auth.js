import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS
} from '../constants/ActionTypes';

const initialState = {
  user: null,
  loggingIn: false,
  loggingOut: false,
  error: null,
  isLoggedIn: false,
  validationErrors: []
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ... state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ... state,
        loggingIn: false,
        user: action.user
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        user: null,
        error: action.error
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        user: null,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loggingOut: false,
        error: action.error
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.error,
        loggingIn: false,
        validationErrors: action.validationErrors
      };
    default:
      return state;
  }
}


