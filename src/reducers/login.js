import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ON_LOGIN_FORM_FIELD_CHANGE
} from '../constants/ActionTypes';

import {Record} from 'immutable';
import validate from './../validators/loginValidator';
import rules from './../validators/validationRules';

const InitialState = Record({
  isLoggedIn: false,
  isFetching: false,
  error: null,
  form: new (Record({
    disabled: false,
    isValid: false,
    error: null,
    fields: new (Record({
      email: '',
      emailHasError: false,
      password: '',
      passwordHasError: false,
    }))
  }))
});


const initialState = new InitialState;

export default function login(state = initialState, action = {}) {

  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {
    case LOGIN_REQUEST:
      return state.setIn(['isFetching'], true).setIn(['isLoggedIn'], false).setIn(['error'], null);

    case LOGIN_SUCCESS:
      return state.setIn(['isFetching'], false).setIn(['isLoggedIn'], true).setIn(['error'], null);

    case LOGIN_FAILURE:
      return state.setIn(['isFetching'], false).setIn(['isLoggedIn'], false).setIn(['error'], action.error);

    case ON_LOGIN_FORM_FIELD_CHANGE:
    {
      const {field, value} = action.payload;

      let nextState = state.setIn(['form', 'fields', field], value).setIn(['form', 'error'], null);

      return validate(rules(nextState, action));
    }

    default:
      return state;
  }
}


