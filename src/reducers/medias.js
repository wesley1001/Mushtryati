import {Record} from 'immutable';

import {
  MEDIAS_SUCCESS,
} from '../constants/ActionTypes'

const InitialState = Record({
  collection: []
});

const initialState = new InitialState;

export default function medias(state = initialState, action = {}) {
  switch (action.type) {
    case MEDIAS_SUCCESS:
      return state.set('collection', action.collection);
    default:
      return state
  }
}
