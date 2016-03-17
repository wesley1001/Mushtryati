import {API_ROOT} from './../../utils/config';
import { normalize, Schema, arrayOf } from 'normalizr';
import { Schemas } from './../../constants/Schema';
import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  SET_CURRENT_USER
} from './../../constants/ActionTypes';

function userSuccess(payload) {
  const normalized = normalize(payload.data, Schemas.USER);
  return {
    type: USER_SUCCESS,
    entities: normalized.entities
  }
}

export function setCurrentUser(id) {
  return (dispatch) => {
    dispatch({type:SET_CURRENT_USER,current:id});
  }
}

export function fetchUser() {
  return (dispatch,state) => {
    dispatch({type:USER_REQUEST});
    const currentID = state().userReducer.current;
    const url = API_ROOT + '/users/' + currentID;
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(userSuccess(json));
      })
      .catch((err)=> {
        dispatch({type:USER_FAILURE,error:err});
      })
  }
}