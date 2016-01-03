import {Record} from 'immutable';

import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from '../../constants/ActionTypes';

const InitialState = Record({
  isFetching: false,
  errors: []
});

const initialState = new InitialState;

export default function register(state = initialState, action = {}) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return state.set('isFetching', true).set('errors', []);
    case REGISTER_SUCCESS:
      return state.set('isFetching', false).set('errors', []);
    case REGISTER_FAILURE:
      return state.set('isFetching', false).set('errors', action.validationErrors);
    default:
      return state;
  }
}


