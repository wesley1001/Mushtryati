import {API_ROOT} from './../../utils/config'

import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from '../../constants/ActionTypes';

function registerRequest() {
  return {
    type: REGISTER_REQUEST
  };
}

function registerSuccess() {
  return {
    type: REGISTER_SUCCESS
  };
}

function registerFailure(errors) {
  return {
    type: REGISTER_FAILURE,
    validationErrors: errors
  };
}

export function register(inputs, cb = ()=> {
  success: false
}) {
  return dispatch => {
    dispatch(registerRequest());
    return fetch(API_ROOT + '/auth/register', {
      method: 'POST',
      body: JSON.stringify(inputs)
    })
      .then(response => response.json())
      .then(json => {
        if (json.success == false) {
          dispatch(registerFailure(json.errors));
        } else {
          dispatch(registerSuccess());
          return cb({success: true});
        }
      })
      .catch((err)=> {
        dispatch(registerFailure(err))
      });
  };
}