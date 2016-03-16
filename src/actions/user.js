import {
  USER_SUCCESS,
} from './../constants/ActionTypes';


import {API_ROOT} from './../utils/config';

function userSuccess(payload) {
  return {
    type: USER_SUCCESS,
    entity: payload.data,
  }
}

export function fetchUser(userID) {
  //const url = API_ROOT + '/user/' + userID ; // @todo : fix userID
  const url = API_ROOT + '/user/1' ;
  return (dispatch) => {
     dispatch(xhrRequest());
     return fetch(url)
     .then(response => response.json())
     .then(json => {
       dispatch(xhrRequestSuccess());
       dispatch(userSuccess(json));
     })
     .catch((err)=> {
       dispatch(xhrRequestFailure(err))
     })
  }
}
