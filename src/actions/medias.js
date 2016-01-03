import {API_ROOT} from './../utils/config';
import { normalize, Schema, arrayOf } from 'normalizr';

import {
  MEDIAS_SUCCESS,
} from '../constants/ActionTypes';

import {
  mediaSchema
} from '../constants/Schemas';

import {xhrRequest,xhrRequestSuccess,xhrRequestFailure} from './global';

function mediasSuccess(payload) {
  return {
    type: MEDIAS_SUCCESS,
    collection: normalize(payload.data,arrayOf(mediaSchema))
  }
}

export function fetchMedias() {
  const url = API_ROOT + '/medias';
  return (dispatch) => {
    dispatch(xhrRequest());
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(xhrRequestSuccess());
        dispatch(mediasSuccess(json));
      })
      .catch((err)=> {
        dispatch(xhrRequestFailure(err));
      })
  }
}
