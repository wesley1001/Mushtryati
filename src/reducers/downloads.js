import {Record} from 'immutable';

import {
  DOWNLOADS_REQUEST,
  DOWNLOADS_SUCCESS,
  DOWNLOADS_FAILURE,
} from '../constants/ActionTypes'

const InitialState = Record({
  isFetching:false
});

const initialState = new InitialState;

export default function downloadsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case DOWNLOADS_REQUEST:
      return state.set('isFetching', true);
    case DOWNLOADS_SUCCESS:
      return state.set('isFetching', false);
    case DOWNLOADS_FAILURE:
      return state.set('isFetching', false).set('error',action.error);
    default:
      return state
  }
}