import {API_ROOT} from './../utils/config'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS
} from '../constants/ActionTypes';

function loginRequest(user) {
  return {
    type: LOGIN_REQUEST,
    user: user
  };
}

function signUpRequest(user) {
  return {
    type: SIGNUP_REQUEST,
    user: user
  };
}


function signUpSuccess() {
  return {
    type: SIGNUP_SUCCESS,
  };
}

function signUpFailure(errorMessage, validationErrors) {
  return {
    type: SIGNUP_FAILURE,
    error: errorMessage,
    validationErrors: validationErrors
  };
}


function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    user: payload
  };
}

function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error: error
  };
}

function logoutRequest(user) {
  return {
    type: LOGOUT_REQUEST,
    user
  };
}

function logoutSuccess(user, payload) {
  return {
    type: LOGOUT_SUCCESS,
    user,
    payload
  };
}

function logoutFailure(error) {
  return {
    type: LOGOUT_FAILURE,
    error
  };
}

export function login(email, password, cb = ()=> {
  success: false
}) {
  let url = API_ROOT + '/auth/login';
  return dispatch => {
    dispatch(loginRequest(email));
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.success == false) {
          dispatch(loginFailure(email, json.message));
        } else {
          dispatch(loginSuccess(json));
          return cb({success: true, user: {json}});
        }
      })
      .catch((err)=> {
        alert(err);
        dispatch(loginFailure(err))
      });
  };
}

export function register(params, cb = ()=> {
  success: false
}) {
  return dispatch => {
    dispatch(signUpRequest(params));
    return fetch(API_ROOT + '/auth/register', {
      method: 'POST',
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(json => {
        if (json.success == false) {
          dispatch(signUpFailure(json.message, json.errors));
        } else {
          dispatch(signUpSuccess(json));
          return cb({success: true});
        }
      })
      .catch((err)=> {
        dispatch(signUpFailure(json.message, null))
      });
  };
}

//
//export function logout(user) {
//  return dispatch => {
//    dispatch(logoutRequest(user));
//
//    return fetch(API_ROOT + '/api/logout', {
//      method: 'post',
//      headers: {
//        'Accept': 'application/json',
//        'Content-Type': 'application/json'
//      },
//      body: JSON.stringify({
//        user: user
//      })
//    }).then(parseJSON)
//      //.then(parseJSON)
//      .then(json => dispatch(logoutSuccess(user, json)))
//      .catch(function (error) {
//        const response = error.response;
//        if (response === undefined) {
//          dispatch(logoutFailure(user, error));
//        } else {
//          parseJSON(response)
//            .then(function (json) {
//              error.status = response.status;
//              error.statusText = response.statusText;
//              error.message = json.message;
//              dispatch(logout(user, error));
//            });
//        }
//      });
//  };
//}

