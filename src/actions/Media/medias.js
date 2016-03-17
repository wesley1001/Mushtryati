import { API_ROOT } from './../../utils/config';
import { MEDIAS_SUCCESS,MEDIAS_REQUEST,MEDIAS_FAILURE } from '../../constants/ActionTypes';
import { normalize, Schema, arrayOf } from 'normalizr';
import { Schemas } from './../../constants/Schema';
import { getUserToken } from './../../utils/storage';

function mediasSuccess(payload) {
  const normalized = normalize(payload.data, arrayOf(Schemas.MEDIA_ARRAY));
  return {
    type: MEDIAS_SUCCESS,
    entities:normalized.entities
  }
}

export function fetchMedias() {
  const url = API_ROOT + '/medias';
  return (dispatch) => {
    dispatch({type:MEDIAS_REQUEST});
    return getUserToken().then((token) => {
      console.log(token);
      const url = API_ROOT + `/medias?api_token=${token}`;
      return fetch(url)
        .then(response => response.json())
        .then(json => {
          dispatch(mediasSuccess(json));
        })
        .catch((err) => dispatch({type: MEDIAS_FAILURE, error: err}))
    })
  }
}