import {API_ROOT} from './../../utils/config';
import { normalize, Schema, arrayOf } from 'normalizr';
import { Schemas } from './../../constants/Schema';

import {
  FAVORITES_SUCCESS,
  FAVORITES_REQUEST,
  MEDIA_FAVORITE,
} from '../../constants/ActionTypes';

function favoriteRequest() {
  return {
    type: FAVORITES_REQUEST
  }
}

//function favoriteSuccess(payload) {
//  return {
//    type: FAVORITES_SUCCESS,
//    users: payload.data,
//  }
//}

function toggleFavorite(media) {
  const normalized = normalize(Object.assign({},media,{isFavorited:!media.isFavorited}),Schemas.MEDIA);
  return {
    type: MEDIA_FAVORITE,
    entities: normalized.entities
  }
}

export function fetchFavorites(mediaID) {
  return (dispatch) => {
    dispatch(favoriteRequest());
    return fetch(API_ROOT + '/medias/' + mediaID + '/favorites')
      .then(response => response.json())
      .then(json => {
        dispatch(favoriteSuccess(json));
      })
      .catch((err)=> {
        dispatch(xhrRequestFailure(err));
      })
  }
}

/**
 * @param params
 * @returns {Function}
 * Favorite a media
 */
export function favoriteMedia() {
  return (dispatch,state) => {

    const params = {
      user:state().userReducer.authUserID,
      media:state().mediaReducer.current
    };

    const media = state().entities.medias[params.media];

    // if the api request failed, remove the item from array
    dispatch(toggleFavorite(media));

    return fetch(API_ROOT + '/medias/favorite', {
      method: 'POST',
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(json => {
        //dispatch(favoriteSuccess(json));
      }).catch((err)=> console.log(err))
  }
}