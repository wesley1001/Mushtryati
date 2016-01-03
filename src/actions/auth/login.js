import {API_ROOT} from './../../utils/config'

import {
  LOGIN_SUCCESS,
  XHR_REQUEST,
  XHR_FAILURE,
  ON_LOGIN_FORM_FIELD_CHANGE
} from '../../constants/ActionTypes';

import {xhrRequest,xhrRequestFailure} from './../global';

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

export function login(credentials, cb = ()=> {success: false}) {

  let url = API_ROOT + '/auth/login';

  return dispatch => {
    dispatch(xhrRequest());
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(json => {
        if (json.success == false) {
          dispatch(xhrRequestFailure(json.message));
          return cb({success: false});
        } else {
          dispatch(loginSuccess());
          return cb({success: true,user:json});
        }
      })
      .catch((err)=> {
        dispatch(xhrRequestFailure(err));
        return cb({success: false});
      });
  };
}


export function onLoginFormFieldChange(field,value) {
  return {
    type: ON_LOGIN_FORM_FIELD_CHANGE,
    payload: {field: field, value: value}
  };
}