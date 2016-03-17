import {API_ROOT} from './../../utils/config';
import { normalize, Schema, arrayOf } from 'normalizr';
import { Schemas } from './../../constants/Schema';
import { fetchFavorites } from './../favorites';
import { getUserToken } from './../../utils/storage';
import {
  MEDIA_SUCCESS,
  MEDIA_REQUEST,
  MEDIA_FAILURE,
  SET_CURRENT_MEDIA
} from '../../constants/ActionTypes';

function mediaSuccess(payload) {
  const normalized = normalize(payload.data, Schemas.MEDIA_ARRAY);
  return {
    type: MEDIA_SUCCESS,
    entities: normalized.entities
  }
}

export function fetchMedia() {
  return (dispatch,state) => {
    dispatch({type:MEDIA_REQUEST});
    const mediaID = state().mediaReducer.current;
    return getUserToken().then((token) => {
      const url = API_ROOT + `/medias/${mediaID}?api_token=${token}`;
      return fetch(url)
        .then(response => response.json())
        .then(json => {
          dispatch(mediaSuccess(json));
        })
        .catch((err)=> {
          dispatch({type: MEDIA_FAILURE, error: err});
        })
    })
  }
}

export function setCurrentMedia(mediaID) {
  return (dispatch) => {
    dispatch({type: SET_CURRENT_MEDIA, current: mediaID});
  }
}
