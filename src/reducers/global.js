import {Record} from 'immutable';

import {
  XHR_REQUEST,
  XHR_SUCCESS,
  XHR_FAILURE
} from '../constants/ActionTypes';

const InitialState = Record({
  isFetching: false,
  error: null,
});

const initialState = new InitialState;

export default function global(state = initialState, action = {}) {
  switch (action.type) {
    case XHR_REQUEST:
      return state.set('isFetching', true).set('error', null);
    case XHR_SUCCESS:
      return state.set('isFetching', false).set('error', null);
    case XHR_FAILURE:
      return state.set('isFetching', false).set('error', action.error);
    default:
      return state;
  }
}