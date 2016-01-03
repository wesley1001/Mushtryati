import {API_ROOT} from './../../utils/config'

import {
  REGISTER_SUCCESS,
  XHR_REQUEST,
  XHR_FAILURE,
} from '../../constants/ActionTypes';

import {xhrRequest,xhrRequestFailure} from './../global';

function registerSuccess() {
  return {
    type: REGISTER_SUCCESS
  };
}

export function register(inputs, cb = ()=> { success: false }) {
  return dispatch => {
    dispatch(xhrRequest());
    return fetch(API_ROOT + '/auth/register', {
      method: 'POST',
      body: JSON.stringify(inputs)
    })
      .then(response => response.json())
      .then(json => {
        if (json.success == false) {
          dispatch(xhrRequestFailure(json.errors));
        } else {
          dispatch(registerSuccess());
          return cb({success: true});
        }
      })
      .catch((err)=> {
        dispatch(xhrRequestFailure(err))
      });
  };
}