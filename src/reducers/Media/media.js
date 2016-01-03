import {
  MEDIA_SUCCESS,
  MEDIA_FAVORITE,
  MEDIA_FAVORITE_SUCCESS,
  MEDIA_LIKE
} from '../../constants/ActionTypes'

import {Record} from 'immutable';

const InitialState = Record({
  entity: {},
  hasFavorited: false,
  hasLiked: false,
  comments: [],
  favorites: []
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
    case MEDIA_FAVORITE_SUCCESS:
      return state
        .setIn(['favorites', 'isFetching'], false)
        .setIn(['favorites', 'users'], action.users);
    default:
      return state
  }
}
