import {
  ON_LOGIN_FORM_FIELD_CHANGE
} from '../../constants/ActionTypes';

import {Record} from 'immutable';
import validate from './../../validators/Auth/loginValidator';
import rules from './../../validators/validationRules';

const InitialState = Record({
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

  switch (action.type) {

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


