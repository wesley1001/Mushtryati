import {Record} from 'immutable';

import {
  FAVORITES_REQUEST,
  FAVORITES_SUCCESS,
  FAVORITES_FAILURE,
} from '../constants/actiontypes'

const InitialState = Record({
  isFetching:false
});

const initialState = new InitialState;

export default function favoritesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FAVORITES_REQUEST:
      return state.set('isFetching', true);
    case FAVORITES_SUCCESS:
      return state.set('isFetching', false);
    case FAVORITES_FAILURE:
      return state.set('isFetching', false);
    default:
      return state
  }
}