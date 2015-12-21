import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ON_LOGIN_FORM_FIELD_CHANGE
} from '../constants/ActionTypes';

import {Record} from 'immutable';
import validate from './../validators/loginValidator';
import rules from './../validators/validationRules';
import _ from 'lodash';

const initialState = {
  form: {
    isValid: false,
    disabled: false,
    fields: {
      email: '',
      emailHasError: false,
      password: '',
      passwordHasError: false
    }
  },
  isLoggedIn: false,
  isFetching: false,
  error: null,
}

export default function login(state = initialState, action = {}) {
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
    case ON_LOGIN_FORM_FIELD_CHANGE:
    {
      const {field, value} = action.payload;

      let nextState = Object.assign({}, state, _.set(state.form.fields, field, value));

      var finalState = validate(rules(nextState, action), action);

      return finalState;
    }

    default:
      return state;
  }
}


