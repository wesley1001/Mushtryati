import {API_ROOT} from './../utils/config'

export function commentMedia(params) {
  return (dispatch, getState) => {
    const { state } = getState();
    params.user = 1 // state.auth.user.id;
    console.log(params);
    return fetch(API_ROOT + '/medias/comment', {
      method: 'POST',
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(json => {console.log('success', json)})
      .catch((error)=> {console.log('error', error)})
  }
}