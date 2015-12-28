import {API_ROOT} from './../../utils/config'
import {
  MEDIA_FAVORITE,
  MEDIA_FAVORITE_REQUEST,
  MEDIA_FAVORITE_SUCCESS,
  MEDIA_FAVORITE_FAILURE,
} from '../../constants/ActionTypes'

function favoriteRequest() {
  return {
    type: MEDIA_FAVORITE_REQUEST
  }
}

function favoriteSuccess(payload) {
  return {
    type: MEDIA_FAVORITE_SUCCESS,
    entity: payload.data,
    hasFavorited: payload.hasFavorited,
    comments: payload.comments
  }
}

function favoriteFailure(error) {
  return {
    type: MEDIA_FAVORITE_FAILURE,
    error: error
  }
}

function toggleFavorite(hasFavorited) {
  return {
    type: MEDIA_FAVORITE,
    hasFavorited: hasFavorited
  }
}

export function fetchFavorites(mediaID) {
  return (dispatch) => {
    dispatch(favoriteRequest());
    return fetch(API_ROOT + '/medias/' + mediaID + '/favorites')
      .then(response => response.json())
      .then(json => {
        dispatch(favoriteSuccess(json));
      })
      .catch((err)=> {
        dispatch(favoriteFailure(err));
      })
  }
}

/**
 * @param params
 * @returns {Function}
 * Favorite a media
 */
export function favoriteMedia(params) {
  return (dispatch) => {
    return fetch(API_ROOT + '/medias/favorite', {
      method: 'POST',
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(json => {
        dispatch(toggleFavorite(json));
        dispatch(favoriteSuccess(json));
      }).catch((err)=> {
      })
  }
}