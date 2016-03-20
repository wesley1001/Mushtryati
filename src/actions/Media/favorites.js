import { API_ROOT } from './../../constants/config';
import { normalize, Schema, arrayOf } from 'normalizr';
import { Schemas } from './../../utils/schema';
import { getUserToken } from './../../utils/storage';

import {
  MEDIA_FAVORITE,
  MEDIA_FAVORITES_SUCCESS,
  MEDIA_FAVORITES_REQUEST,
  MEDIA_FAVORITES_FAILURE,

} from '../../constants/actiontypes';

function toggleFavorite(payload) {
  const media = Object.assign({},payload,{isFavorited:!payload.isFavorited});
  const normalized = normalize(media,Schemas.MEDIA);
  return {
    type: MEDIA_FAVORITE,
    entities: normalized.entities
  }
}

function mediaFavoritesRequest() {
  return {
    type: MEDIA_FAVORITES_REQUEST
  }
}

function mediaFavoritesSuccess(payload) {
  const normalized = normalize(payload.data,Schemas.USER);
  return {
    type: MEDIA_FAVORITES_SUCCESS,
    entities: normalized.entities
  }
}

function mediaFavoritesFailure(err) {
  return {
    type: MEDIA_FAVORITES_FAILURE,
    error:err
  }
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
    dispatch(toggleFavorite(media));

    return getUserToken().then((token) => {
      const url = API_ROOT + `/medias/favorite?api_token=${token}`;
      return fetch(url, {
        method: 'POST',
        body: JSON.stringify(params)
      })
        .then(response => response.json())
        .then(json => {
          //dispatch(fetchFavorites());
        }).catch((err)=> console.log(err))
    })
  }
}

/**
 * @returns {Function}
 */

// get Auth user's favorites
export function fetchMediaFavorites() {
  return (dispatch,state) => {
    const mediaID = state().mediaReducer.current;
    dispatch(mediaFavoritesRequest());
    return getUserToken().then((token) => {
      const url = API_ROOT + `/medias/${mediaID}/favorites?api_token=${token}`;
      console.log('url');
      return fetch(url)
        .then(response => response.json())
        .then(json => {
          if(json.success) {
            dispatch(mediaFavoritesSuccess(json));
          } else {
            console.log('rejected');
            Promise.reject(new Error(json.message))
          }
        })
    }).catch((err)=> dispatch(mediaFavoritesFailure(err)))
  }
}
