import {API_ROOT} from './../utils/config'

export function favoriteMedia(media) {
  return (dispatch, getState) => {
    const { state } = getState();
    console.log('state', getState());
    let userID = 1 // state.auth.user.id;
    return fetch(API_ROOT + '/medias/favorite', {
      method: 'POST',
      body: JSON.stringify({
        media: media,
        user: userID
      })
    })
      .then(response => response.json())
      .then(json => {console.log('success', json)})
      .catch((error)=> {console.log('error', error)})
  }
}