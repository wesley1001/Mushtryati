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

const initialState = {
  entity: {},
  isFetching: false,
  hasFavorited: false,
  hasLiked: false,
  error: null,
  comments: [],
  favorites: {
    isFetching: false,
    users: [
      {
        id: 1, name: 'zal'
      },
      {id: 2, name: 'asd'}
    ]
  }
}

export default function mediaReducer(state = initialState, action = {}) {
  switch (action.type) {
    case MEDIA_REQUEST:
      return {
        ... state,
        isFetching: true,
        error: null
      }
    case MEDIA_SUCCESS:
      return {
        ... state,
        isFetching: false,
        entity: action.entity,
        hasFavorited: action.hasFavorited,
        comments: action.comments,
        error: null
      }
    case MEDIA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case MEDIA_FAVORITE :
      return Object.assign({}, state, action.hasFavorited);
    case MEDIA_LIKE :
      return Object.assign({}, state, action.hasLiked);
    case MEDIA_FAVORITE_REQUEST:
      return Object.assign({}, state, state.favorites.isFetching = true);
    case MEDIA_FAVORITE_SUCCESS:
      return Object.assign({}, state, state.favorites.isFetching = false, state.favorites.users = action.users);
    case MEDIA_FAVORITE_FAILURE:
      return Object.assign({}, state, state.favorites.isFetching = false);
    default:
      return state
  }
}
