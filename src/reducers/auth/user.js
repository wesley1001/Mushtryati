import {Record} from 'immutable';

import {
  USER_SUCCESS,
} from '../../constants/ActionTypes';

const InitialState = Record({
  entity:null
});

const initialState = new InitialState;

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case USER_SUCCESS:
      return state.set('entity', action.entity);
    default:
    return state;
  }
}
