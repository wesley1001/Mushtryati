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
  return (dispatch) => {

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

export function selectMedia(media) {
  return (dispatch) => {
    dispatch(mediasRequest())
    return fetch(API_ROOT + '/medias/' + media.id)
      .then(response => response.json())
      .then(json => {
        dispatch(selectedMedia(json))
      })
      .catch((error)=> {})
  }
}

export function favoriteMedia(media) {
  return (dispatch, getState) => {
    const { state } = getState();
    console.log('state', getState());
    let userID = 1 // state.auth.user.id;
    return fetch(API_ROOT + '/medias/favorite', {
      method: 'POST',
      body: JSON.stringify({
        media: media,
        user: userID
      })
    })
      .then(response => response.json())
      .then(json => {console.log('success', json)})
      .catch((error)=> {console.log('error', error)})
  }
}

export function commentMedia(params) {
  return (dispatch, getState) => {
    const { state } = getState();
    params.user = 1 // state.auth.user.id;
    console.log(params);
    return fetch(API_ROOT + '/medias/comment', {
      method: 'POST',
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(json => {console.log('success', json)})
      .catch((error)=> {console.log('error', error)})
  }
}