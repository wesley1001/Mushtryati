import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants/ActionTypes';

const initialState = {
  isLoggedIn: false,
  processingRequest: false,
  error: null
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ... state,
        processingRequest: true,
        isLoggedIn: false,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ... state,
        processingRequest: false,
        isLoggedIn: true,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        processingRequest: false,
        isLoggedIn: false,
        error: action.error
      };
    default:
      return state;
  }
}


