import {Record} from 'immutable';

import {
  MEDIA_REQUEST,
  MEDIA_SUCCESS,
  MEDIA_FAILURE,
  MEDIA_FAVORITES_REQUEST,
  MEDIA_FAVORITES_SUCCESS,
  MEDIA_FAVORITES_FAILURE,
  SET_CURRENT_MEDIA
} from '../constants/actiontypes'

const InitialState = Record({
  isFetching:false,
  current:null,
  favorites:new (Record({
    isFetching:false,
    error:null
  })),
  downloads:new (Record({
    isFetching:false,
    error:null
  })),
});

const initialState = new InitialState;

export default function mediaReducer(state = initialState, action = {}) {
  switch (action.type) {
    case MEDIA_REQUEST:
      return state.set('isFetching', true);
    case MEDIA_SUCCESS:
      return state.set('isFetching', false);
    case MEDIA_FAILURE:
      return state.set('isFetching', false);
    case SET_CURRENT_MEDIA:
      return state.set('current', action.current);
    default:
      return state
  }
}
