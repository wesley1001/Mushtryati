import { API_ROOT } from './../../constants/config';
import { normalize, Schema, arrayOf } from 'normalizr';
import { Schemas } from './../../utils/schema';
import { getUserToken } from './../../utils/storage';

import {
  FAVORITES_SUCCESS,
  FAVORITES_REQUEST,
  FAVORITES_FAILURE,
} from '../../constants/actiontypes';

function favoritesRequest() {
  return {
    type: FAVORITES_REQUEST
  }
}

function favoritesSuccess(payload) {
  const normalized = normalize(payload.data,Schemas.USER);
  return {
    type: FAVORITES_SUCCESS,
    entities: normalized.entities
  }
}

function favoritesFailure(err) {
  return {
    type: FAVORITES_FAILURE,
    error:err
  }
}

/**
 * @returns {Function}
 * Favorite a media
 */

// get Auth user's favorites
export function fetchFavorites() {
  return (dispatch) => {
    dispatch(favoritesRequest());
    return getUserToken().then((token) => {
      const url = API_ROOT + `/favorites?api_token=${token}`;
      return fetch(url)
        .then(response => response.json())
        .then(json => {
          if(json.success) {
            dispatch(favoritesSuccess(json));
          } else {
            console.log('rejected');
            Promise.reject(new Error(json.message))
          }
        })
    }).catch((err)=> dispatch(favoritesFailure(err)))
  }
}