import {API_ROOT} from './../utils/config';
import {
  MEDIA_REQUEST,
  MEDIA_SUCCESS,
  MEDIA_FAILURE
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
    comments:payload.comments
  }
}

function mediaFailure(error) {
  return {
    type: MEDIA_FAILURE,
    error: error
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
