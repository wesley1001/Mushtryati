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

const InitialState = Record({
  isFetching: false,
  error: null,
  form: new (Record({
    disabled: false,
    isValid: false,
    fields: new (Record({
      email: '',
      emailHasError: false,
      password: '',
      passwordHasError: false
    }))
  }))
});

export default function login(state = new InitialState, action = {}) {

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
      console.log(state);
      const {field, value} = action.payload;

      let nextState = state.setIn(['form', 'fields', field], value);

      //let nextState =  state.setIn(['form', 'fields', field], value)
      //  .setIn(['form','error'],null);

      //var finalState = formValidation(
      //  fieldValidation( nextState, action)
      //  , action);

      var finalState = validate(rules(nextState, action), action);

      //return nextState;
      return finalState;
    }

    default:
      return state;
  }
}


