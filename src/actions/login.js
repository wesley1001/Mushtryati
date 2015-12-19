import {API_ROOT} from './../utils/config'
import { setUser } from '../actions/user';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants/ActionTypes';

function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

function loginFailure(message) {
  return {
    type: LOGIN_FAILURE,
    error: message
  };
}

export function login(credentials, cb = ()=> {
  success: false
}) {
  let url = API_ROOT + '/auth/login';
  return dispatch => {
    dispatch(loginRequest());
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(json => {
        if (json.success == false) {
          dispatch(loginFailure(json.message));
          return cb({success: false});
        } else {
          dispatch(loginSuccess());
          dispatch(setUser(json));
          return cb({success: true,user:json});
        }
      })
      .catch((err)=> {
        dispatch(loginFailure(err));
        return cb({success: false});
      });
  };
}