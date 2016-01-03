import {API_ROOT} from './../../utils/config'
import {
  MEDIA_FAVORITE_SUCCESS,
  MEDIA_FAVORITE
} from '../../constants/ActionTypes';

import {xhrRequest,xhrRequestFailure} from './../global';


function favoriteSuccess(payload) {
  return {
    type: MEDIA_FAVORITE_SUCCESS,
    users: payload.data,
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
    dispatch(xhrRequest());
    return fetch(API_ROOT + '/medias/' + mediaID + '/favorites')
      .then(response => response.json())
      .then(json => {
        dispatch(favoriteSuccess(json));
      })
      .catch((err)=> {
        dispatch(xhrRequestFailure(err));
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
      }).catch((err)=> {})
  }
}