import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants/ActionTypes';

const initialState = {
  isLoggedIn: false,
  isFetching: false,
  error: null,
  disabled: false,
  isValid: false,
  formFields: {
    email: '',
    emailHasError: false,
    password: '',
    passwordHasError: false,
  }
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
    //case ON_AUTH_FORM_FIELD_CHANGE: {
    //  const {field, value} = action.payload;
    //  let nextState =  state.setIn(['form', 'fields', field], value)
    //    .setIn(['form','error'],null);
    //
    //  var finalState = formValidation(
    //    fieldValidation( nextState, action)
    //    , action);
    //
    //  return finalState;
    //}

    default:
      return state;
  }
}


