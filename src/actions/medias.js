import { API_ROOT } from './../utils/config';
import { normalize, Schema, arrayOf } from 'normalizr';
import { MEDIAS_SUCCESS,MEDIAS_REQUEST,MEDIAS_FAILURE } from '../constants/ActionTypes';
import { Schemas } from '../constants/Schema';

function mediasSuccess(payload) {
  const normalized = normalize(payload.data, arrayOf(Schemas.MEDIA_ARRAY));
  return {
    type: MEDIAS_SUCCESS,
    entities:normalized.entities
  }
}

export function fetchMedias() {
  const url = API_ROOT + '/medias';
  return (dispatch) => {
    dispatch({type:MEDIAS_REQUEST});
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(mediasSuccess(json));
      })
      .catch((err) => dispatch({type:MEDIAS_FAILURE,error:err}))
  }
}