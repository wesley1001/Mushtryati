import {API_ROOT} from './../utils/config'
import {MEDIA_REQUEST,MEDIA_SUCCESS,MEDIA_FAILURE,SELECTED_MEDIA,FAVORITE_MEDIA,COMMENT_MEDIA } from '../constants/ActionTypes'

function mediasRequest() {
  return {
    type: MEDIA_REQUEST,
  }
}

function mediasSuccess(payload) {
  return {
    type: MEDIA_SUCCESS,
    data: payload.data
  }
}

function mediasFailure(error) {
  return {
    type: MEDIA_FAILURE,
    error,
  }
}

export function fetchMedias() {
  return dispatch => {
    dispatch(mediasRequest())
    return fetch(API_ROOT + '/medias')
      .then(response => response.json())
      .then(json => {
        dispatch(mediasSuccess(json))
      })
      .catch((error)=> {
        dispatch(mediasFailure(error))
      })
  }
}

export function selectedMedia(media) {
  return {
    type: SELECTED_MEDIA,
    selected: media
  }
}

export function favoriteMedia(media) {
  return dispatch => {
    return fetch(API_ROOT + '/medias/favorite', {
      method: 'POST',
      body: JSON.stringify({
        media: media
      })
    });
  }
}

export function commentMedia(media, comment) {
  return {
    type: COMMENT_MEDIA,
    media: media
  }
}