import {API_ROOT} from './../../utils/config'

import {
  ON_LOGIN_FORM_FIELD_CHANGE
} from '../../constants/ActionTypes';

import {xhrRequest,xhrRequestSuccess,xhrRequestFailure} from './../global';

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
          dispatch(xhrRequestSuccess());
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