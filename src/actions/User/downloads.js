import { API_ROOT } from './../../constants/config';
import { normalize, Schema, arrayOf } from 'normalizr';
import { Schemas } from './../../utils/schema';
import { getUserToken } from './../../utils/storage';

import {
  DOWNLOADS_SUCCESS,
  DOWNLOADS_REQUEST,
  DOWNLOADS_FAILURE,
} from '../../constants/actiontypes';

function downloadsRequest() {
  return {
    type: DOWNLOADS_REQUEST
  }
}

function downloadsSuccess(payload) {
  const normalized = normalize(payload.data,Schemas.USER);
  console.log('normaziled',normalized);
  return {
    type: DOWNLOADS_SUCCESS,
    entities: normalized.entities
  }
}

function downloadsFailure(err) {
  return {
    type: DOWNLOADS_FAILURE,
    error:err
  }
}

/**
 * @returns {Function}
 * Favorite a media
 */

// get Auth user's downloads
export function fetchDownloads() {
  return (dispatch) => {
    dispatch(downloadsRequest());
    return getUserToken().then((token) => {
      const url = API_ROOT + `/downloads?api_token=${token}`;
      console.log('url',url);
      return fetch(url)
        .then(response => response.json())
        .then(json => {
          if(json.success) {
            dispatch(downloadsSuccess(json));
          } else {
            console.log('rejected');
            Promise.reject(new Error(json.message))
          }
        })
    }).catch((err)=> dispatch(downloadsFailure(err)))
  }
}