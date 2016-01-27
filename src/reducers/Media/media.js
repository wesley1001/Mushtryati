import {
  MEDIA_SUCCESS,
  MEDIA_FAVORITE,
  FAVORITES_SUCCESS,
  FAVORITES_REQUEST,
  MEDIA_LIKE
} from '../../constants/ActionTypes'

import {Record} from 'immutable';

const InitialState = Record({
  entity: {},
  hasFavorited: false,
  hasLiked: false,
  comments: [],
  favorites: new (Record({
    users:null,
    isFetching:false
  }))
});

const initialState = new InitialState;

export default function media(state = initialState, action = {}) {
  switch (action.type) {
    case MEDIA_SUCCESS:
      return state
        .set('entity', action.entity)
        .set('hasFavorited', action.hasFavorited)
        .set('comments', action.comments)
        ;
    case MEDIA_LIKE :
      return state.set('hasLiked', action.hasLiked);
    case FAVORITES_REQUEST:
      return state
        .setIn(['favorites', 'isFetching'], true)
    case FAVORITES_SUCCESS:
      return state
        .setIn(['favorites', 'isFetching'], false)
        .setIn(['favorites', 'users'], action.users);
    default:
      return state
  }
}
