import {API_ROOT} from './../../utils/config';
import {
  MEDIA_SUCCESS,
  MEDIA_REQUEST,
  MEDIA_FAILURE,
  SET_CURRENT_MEDIA,
  MEDIA_LIKE
} from '../../constants/ActionTypes';
import { normalize, Schema, arrayOf } from 'normalizr';
import { Schemas } from './../../constants/Schema';
import { fetchFavorites } from './../favorites';

function mediaSuccess(payload) {
  const normalized = normalize(payload.data, Schemas.MEDIA_ARRAY);
  return {
    type: MEDIA_SUCCESS,
    entities: normalized.entities
  }
}

function toggleLike(hasLiked) {
  return {
    type: MEDIA_LIKE,
    hasliked: hasLiked
  }
}

export function fetchMedia() {

  return (dispatch,state) => {
    dispatch({type:MEDIA_REQUEST});
    const mediaID = state().mediaReducer.current;
    const url = API_ROOT + '/medias/' + mediaID;
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(mediaSuccess(json));
      })
      .catch((err)=> {
        dispatch({type:MEDIA_FAILURE,error:err});
      })
  }
}

export function setCurrentMedia(mediaID) {
  return (dispatch) => {
    dispatch({type: SET_CURRENT_MEDIA, current: mediaID});
  }
}
/**
 * @param params
 * @returns {Function}
 * Favorite a media
 */
export function likeMedia(params) {
  return (dispatch) => {
    return fetch(API_ROOT + '/medias/like', {
      method: 'POST',
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(json => {
        dispatch(toggleLike(json));
      })
      .catch((err)=> {})
  }
}

