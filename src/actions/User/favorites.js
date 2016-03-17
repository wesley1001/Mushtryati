import {API_ROOT} from './../../utils/config'
import {
  FAVORITES_SUCCESS,
  FAVORITES_REQUEST,
  FAVORITES_FAILURE
} from '../../constants/ActionTypes'

function favoritesSuccess(payload) {
  return {
    type: FAVORITES_SUCCESS,
    entities: payload.data
  }
}

export function fetchFavorites(userID) {
  const url = API_ROOT + '/user/' + userID + '/favorites';
  return (dispatch) => {
    dispatch({type:FAVORITES_REQUEST});
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
