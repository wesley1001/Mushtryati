import {Record} from 'immutable';

import {
  FAVORITES_SUCCESS,
} from '../constants/ActionTypes'

const InitialState = Record({
  collection: []
});

const initialState = new InitialState;

export default function comments(state = initialState, action = {}) {
  switch (action.type) {
    case FAVORITES_SUCCESS:
      return state.set('collection', action.collection);
    default:
      return state
  }
}
