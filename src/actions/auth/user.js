import {
  SET_USER,
  USER_XHR_SUCCESS,
} from './../../constants/ActionTypes';

import {xhrRequest,xhrRequestFailure} from './../global';

import {API_ROOT} from './../../utils/config';

function userSuccess(payload) {
  return {
    type: USER_XHR_SUCCESS,
    entity: payload.data,
  }
}

export function fetchUser(userID) {
  const url = API_ROOT + '/user/' + userID ;
  return (dispatch) => {
     dispatch(xhrRequest());
     return fetch(url)
     .then(response => response.json())
     .then(json => {
       dispatch(userSuccess(json));
     })
     .catch((err)=> {
       dispatch(xhrRequestFailure(err))
     })
  }
}
