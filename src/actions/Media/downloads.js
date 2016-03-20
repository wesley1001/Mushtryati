import { API_ROOT } from './../../constants/config';
import { normalize, Schema, arrayOf } from 'normalizr';
import { Schemas } from './../../utils/schema';
import { getUserToken } from './../../utils/storage';

import {
  MEDIA_DOWNLOADS_REQUEST,
  MEDIA_DOWNLOADS_SUCCESS,
  MEDIA_DOWNLOADS_FAILURE,
  MEDIA_DOWNLOAD,
} from '../../constants/actiontypes';

function mediaDownloadsRequest() {
  return {
    type: MEDIA_DOWNLOADS_REQUEST
  }
}

function mediaDownloadsSuccess(payload) {
  const normalized = normalize(payload.data,Schemas.USER);
  return {
    type: MEDIA_DOWNLOADS_SUCCESS,
    entities: normalized.entities
  }
}

function mediaDownloadsFailure(err) {
  return {
    type: MEDIA_DOWNLOADS_FAILURE,
    error:err
  }
}
function toggleDownload(payload) {
  const media = Object.assign({},payload,{isDownloaded:!payload.isDownloaded});
  const normalized = normalize(media,Schemas.MEDIA);
  return {
    type: MEDIA_DOWNLOAD,
    entities: normalized.entities
  }
}


// get Auth user's favorites
export function fetchMediaDownloads() {
  return (dispatch,state) => {
    const mediaID = state().mediaReducer.current;
    dispatch(mediaDownloadsRequest());
    return getUserToken().then((token) => {
      const url = API_ROOT + `/medias/${mediaID}/downloads?api_token=${token}`;
      return fetch(url)
        .then(response => response.json())
        .then(json => {
          if(json.success) {
            dispatch(mediaDownloadsSuccess(json));
          } else {
            console.log('rejected');
            Promise.reject(new Error(json.message))
          }
        })
    }).catch((err)=> dispatch(mediaDownloadsFailure(err)))
  }
}

/**
 * @returns {Function}
 * Favorite a media
 */
export function downloadMedia() {
  return (dispatch,state) => {

    const params = {
      media:state().mediaReducer.current
    };

    const media = state().entities.medias[params.media];
    dispatch(toggleDownload(media));

    return getUserToken().then((token) => {
      const url = API_ROOT + `/medias/download?api_token=${token}`;
      return fetch(url, {
        method: 'POST',
        body: JSON.stringify(params)
      })
        .then(response => response.json())
        .then(json => {
          console.log('json',json)
        }).catch((err)=> console.log(err))
    })
  }
}