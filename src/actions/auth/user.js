import {
  SET_USER,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE
} from './../../constants/ActionTypes';

import {API_ROOT} from './../../utils/config';

export const setUser = (user) => {
  return {
    type: SET_USER,
    user: user
  }
}

function userRequest() {
  return {
    type: USER_REQUEST
  }
}

function userSuccess(payload) {
  return {
    type: USER_SUCCESS,
    entity: payload.data,
  }
}

function userFailure(error) {
  return {
    type: USER_FAILURE,
    error: error
  }
}

export function fetchUser(userID) {
  const url = API_ROOT + '/user/' + userID ;
  return (dispatch) => {
    dispatch(userRequest());
    return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(userSuccess(json));
    })
    .catch((err)=> {
      dispatch(userFailure(err))
    })
  }
}
