import {API_ROOT} from './../../utils/config';
import { normalize, Schema, arrayOf } from 'normalizr';
import { Schemas } from './../../constants/Schema';
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

//export function fetchFavorites(mediaID) {
//  return (dispatch) => {
//    dispatch(favoriteRequest());
//    return fetch(API_ROOT + '/medias/' + mediaID + '/favorites')
//      .then(response => response.json())
//      .then(json => {
//        dispatch(favoriteSuccess(json));
//      })
//      .catch((err)=> {
//        dispatch(xhrRequestFailure(err));
//      })
//  }
//}

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
    dispatch(toggleFavorite(media));
    return getUserToken().then((token) => {
      const url = API_ROOT + `/medias/favorite?api_token=${token}`;
      return fetch(url, {
        method: 'POST',
        body: JSON.stringify(params)
      })
        .then(response => response.json())
        .then(json => {
          console.log('success',json);
          //dispatch(favoriteSuccess(json));
        }).catch((err)=> console.log(err))
    })
  }
}