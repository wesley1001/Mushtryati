import {
  MEDIA_REQUEST,
  MEDIA_SUCCESS,
  MEDIA_FAILURE,
  MEDIA_FAVORITE,
  MEDIA_FAVORITE_REQUEST,
  MEDIA_FAVORITE_SUCCESS,
  MEDIA_FAVORITE_FAILURE,
  MEDIA_LIKE
} from '../../constants/ActionTypes'

import {Record} from 'immutable';

const InitialState = Record({
  entity: {},
  isFetching: false,
  hasFavorited: false,
  hasLiked: false,
  error: null,
  comments: [],
  favorites: new (Record({
    isFetching: false,
    users: new (Record([
      {
        id: 1, name: 'zal'
      },
      {id: 2, name: 'asd'}
    ]))
  }))
});

const initialState = new InitialState;

export default function media(state = initialState, action = {}) {
  switch (action.type) {
    case MEDIA_SUCCESS:
      return state
        .set('isFetching', false)
        .set('entity', action.entity)
        .set('hasFavorited', action.hasFavorited)
        .set('comments', action.comments)
        .set('error', null)
        ;
    case MEDIA_FAVORITE :
      return state.set('error', action.error);
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
