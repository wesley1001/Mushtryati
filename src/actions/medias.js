import { API_ROOT } from './../utils/config';
import { normalize, Schema, arrayOf } from 'normalizr';
import { xhrRequest,xhrRequestSuccess,xhrRequestFailure } from './global';
import { MEDIAS_SUCCESS } from '../constants/ActionTypes';
import { mediaSchema } from '../constants/Schemas';

function mediasSuccess(result,entities) {
  return {
    type: MEDIAS_SUCCESS,
    entities:entities
  }
}

export function fetchMedias() {
  const url = API_ROOT + '/medias';
  return (dispatch) => {
    dispatch(xhrRequest());
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        const normalized = normalize(json.data, arrayOf(mediaSchema));
        dispatch(mediasSuccess(normalized.result, normalized.entities));
        dispatch(xhrRequestSuccess());

      })
      .catch((err)=> {
        dispatch(xhrRequestFailure(err));
      })
  }
}
