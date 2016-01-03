import {API_ROOT} from './../utils/config'
import {
  FAVORITES_SUCCESS,
} from '../constants/ActionTypes'

import {xhrRequest,xhrRequestFailure} from './global';

function favoritesSuccess(payload) {
  return {
    type: FAVORITES_SUCCESS,
    collection: payload.data.favorites
  }
}

export function fetchFavorites(userID) {
  const url = API_ROOT + '/user/' + userID + '/favorites';
  return (dispatch) => {
    dispatch(xhrRequest());
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(favoritesSuccess(json));
      })
      .catch((err)=> {
        dispatch(xhrRequestFailure(err))
      })
  }
}
