import {API_ROOT} from './../../utils/config';
import { normalize, Schema, arrayOf } from 'normalizr';
import { Schemas } from './../../constants/Schema';
import { getUserToken } from './../../utils/storage';

import {
  DOWNLOADS_SUCCESS,
  DOWNLOADS_REQUEST,
  MEDIA_DOWNLOAD,
} from '../../constants/ActionTypes';

//function favoriteRequest() {
//  return {
//    type: DOWNLOADS_REQUEST
//  }
//}

function downloadSuccess(payload) {
  console.log('payload',payload.isDownloaded);
  const normalized = normalize(payload.data,Schemas.USER);
  return {
    type: MEDIA_DOWNLOAD,
    //entities: normalized.entities
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

export function fetchDownloads() {
  //return (dispatch) => {
  //  dispatch(favoriteRequest());
  //  return fetch(API_ROOT + '/medias/' + mediaID + '/favorites')
  //    .then(response => response.json())
  //    .then(json => {
  //      dispatch(favoriteSuccess(json));
  //    })
  //    .catch((err)=> {
  //      dispatch(xhrRequestFailure(err));
  //    })
  //}
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