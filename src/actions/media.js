import {API_ROOT} from './../utils/config';
import {
  MEDIA_REQUEST,
  MEDIA_SUCCESS,
  MEDIA_FAILURE,
  MEDIA_FAVORITE
} from '../constants/ActionTypes';

function mediaRequest() {
  return {
    type: MEDIA_REQUEST
  }
}

function mediaSuccess(payload) {
  return {
    type: MEDIA_SUCCESS,
    entity: payload.data,
    hasFavorited: payload.hasFavorited,
    comments: payload.comments
  }
}

function mediaFailure(error) {
  return {
    type: MEDIA_FAILURE,
    error: error
  }
}

function mediaFavorite(hasFavorited) {
  return {
    type: MEDIA_FAVORITE,
    hasFavorited:hasFavorited
  }
}

export function fetchMedia(mediaID) {
  const url = API_ROOT + '/medias/' + mediaID;
  return (dispatch) => {
    dispatch(mediaRequest());
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(mediaSuccess(json))
      })
      .catch((err)=> {
        dispatch(mediaFailure(err))
      })
  }
}

export function favoriteMedia(params) {
  return (dispatch) => {
    return fetch(API_ROOT + '/medias/favorite', {
      method: 'POST',
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(json => {
        dispatch(mediaFavorite(json));
      })
      .catch((error)=> {})
  }
}