import {Record} from 'immutable';

import {
  COMMENTS_SUCCESS,
  COMMENT_SAVING,
  COMMENT_SAVED
} from '../constants/ActionTypes'

const InitialState = Record({
  isFetching: false,
  error: null
});

const initialState = new InitialState;

export default function commentsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case COMMENTS_SUCCESS:
      return state.set('isFetching', false).set('error', null);
    case COMMENT_SAVING:
      return state.set('isFetching', true).set('error', null);
    case COMMENT_SAVED:
      return state.set('isFetching', false).set('error', null);
    default:
      return state
  }
}