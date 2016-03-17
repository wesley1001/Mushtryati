import { API_ROOT } from './../../constants/config';
import { normalize, Schema, arrayOf } from 'normalizr';
import { Schemas } from './../../utils/Schema';
import { getUserToken } from './../../utils/storage';

import {
  FAVORITES_SUCCESS,
  FAVORITES_REQUEST,
  MEDIA_FAVORITE,
} from '../../constants/ActionTypes';

//function favoriteRequest() {
//  return {
//    type: FAVORITES_REQUEST
//  }
//}

function favoriteSuccess(payload) {
  console.log('payload',payload.isFavorited);
  const normalized = normalize(payload.data,Schemas.USER);
  return {
    type: MEDIA_FAVORITE,
    //entities: normalized.entities
  }
}

function toggleFavorite(payload) {
  console.log('payload',payload.isFavorited);
  const media = Object.assign({},payload,{isFavorited:!payload.isFavorited});
  console.log('payload after',media.isFavorited);
  const normalized = normalize(media,Schemas.MEDIA);
  return {
    type: MEDIA_FAVORITE,
    entities: normalized.entities
  }
}

export function fetchFavorites() {
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
export function favoriteMedia() {
  return (dispatch,state) => {

    const params = {
      media:state().mediaReducer.current
    };

    const media = state().entities.medias[params.media];
    console.log('current med',media.isFavorited);
    dispatch(toggleFavorite(media));

    return getUserToken().then((token) => {
      const url = API_ROOT + `/medias/favorite?api_token=${token}`;
      return fetch(url, {
        method: 'POST',
        body: JSON.stringify(params)
      })
        .then(response => response.json())
        .then(json => {
          console.log('json',json)
          //dispatch(fetchFavorites());
        }).catch((err)=> console.log(err))
    })
  }
}