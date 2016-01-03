import {API_ROOT} from './../utils/config';
import { normalize, Schema, arrayOf } from 'normalizr';

import {
  MEDIAS_SUCCESS,
} from '../constants/ActionTypes';

import {
  mediaSchema
} from '../constants/Schemas';

import {xhrRequest,xhrRequestSuccess,xhrRequestFailure} from './global';

function mediasSuccess(result,entities) {
  return {
    type: MEDIAS_SUCCESS,
    entities:entities
  }
}


function receiveSongs(songs, entities, songTitle) {
  return {
    type: types.RECEIVE_SONGS,
    entities,
    nextUrl: null,
    playlist: songTitle,
    songs
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
