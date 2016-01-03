import {API_ROOT} from './../../utils/config';
import {
  MEDIA_SUCCESS,
  MEDIA_LIKE
} from '../../constants/ActionTypes';

import {fetchFavorites} from './../favorites';
import {xhrRequest,xhrRequestFailure} from './../global';

function mediaSuccess(payload) {
  return {
    type: MEDIA_SUCCESS,
    entity: payload.data,
    hasFavorited: payload.hasFavorited,
    comments: payload.comments
  }
}

function toggleLike(hasLiked) {
  return {
    type: MEDIA_LIKE,
    hasliked: hasLiked
  }
}

export function fetchMedia(mediaID) {
  const url = API_ROOT + '/medias/' + mediaID;
  return (dispatch) => {

    dispatch(xhrRequest());
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(mediaSuccess(json))
      })
      .catch((err)=> {
        dispatch(xhrRequestFailure(err))
      })
  }
}



/**
 * @param params
 * @returns {Function}
 * Favorite a media
 */
export function likeMedia(params) {
  return (dispatch) => {
    return fetch(API_ROOT + '/medias/like', {
      method: 'POST',
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(json => {
        dispatch(toggleLike(json));
      })
      .catch((err)=> {})
  }
}
