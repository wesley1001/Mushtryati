import {API_ROOT} from './../utils/config';
import { normalize, Schema, arrayOf } from 'normalizr';

import {
  MEDIAS_REQUEST,
  MEDIAS_SUCCESS,
  MEDIAS_FAILURE
} from '../constants/ActionTypes'

import {
  mediaSchema
} from '../constants/Schemas';

function mediasRequest() {
  return {
    type: MEDIAS_REQUEST,
  }
}

function mediasSuccess(payload) {

  return {
    type: MEDIAS_SUCCESS,
    collection: normalize(payload.data,arrayOf(mediaSchema))
  }
}

function mediasFailure(error) {
  return {
    type: MEDIAS_FAILURE,
    error: error,
  }
}

export function fetchMedias() {
  const url = API_ROOT + '/medias';
  return (dispatch) => {
    //
    //dispatch(mediasSuccess(data));
    dispatch(mediasRequest());

    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(mediasSuccess(json))
      })
      .catch((err)=> {
        dispatch(mediasFailure(err))
      })
  }
}
