import {Record} from 'immutable';

import {
  XHR_REQUEST,
  XHR_SUCCESS,
  XHR_FAILURE
} from '../constants/ActionTypes';

const InitialState = Record({
  isLoggedIn: false,
  isFetching: false,
  error: null,
});

const initialState = new InitialState;

export default function global(state = initialState, action = {}) {

  switch (action.type) {
    case XHR_REQUEST:
      return state.setIn(['isFetching'], true).setIn(['isLoggedIn'], false).setIn(['error'], null);
    case XHR_SUCCESS:
      return state.setIn(['isFetching'], false).setIn(['isLoggedIn'], true).setIn(['error'], null);
    case XHR_FAILURE:
      return state.setIn(['isFetching'], false).setIn(['isLoggedIn'], false).setIn(['error'], action.error);
    default:
      return state;
  }
}


