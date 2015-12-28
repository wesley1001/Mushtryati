import {API_ROOT} from './../../utils/config';
import {
  MEDIA_REQUEST,
  MEDIA_SUCCESS,
  MEDIA_FAILURE,

  MEDIA_LIKE
} from '../../constants/ActionTypes';

import {fetchFavorites} from './../favorites';

function mediaRequest() {
  return {
    type: MEDIA_REQUEST
  }
}

function mediaSuccess(payload) {
  return {
    type: MEDIA_SUCCESS,
    entity: payload.data,
    hasFavorited: payload.hasFavorited,
    comments: payload.comments
  }
}

function mediaFailure(error) {
  return {
    type: MEDIA_FAILURE,
    error: error
  }
}

function toggleLike(hasLiked) {
  return {
    type: MEDIA_LIKE,
    hasliked: hasLiked
  }
}

export function fetchMedia(mediaID) {
  const url = API_ROOT + '/medias/' + mediaID;
  return (dispatch) => {

    var media = {"data":{"id":2,"user_id":3,"caption":"Dolorem consequatur consequatur deleniti commodi sunt eum facilis aut ut ut modi facere culpa qui facere soluta assumenda et totam accusantium ut qui deleniti quam culpa recusandae a nisi laborum qui deserunt vel ipsam enim porro facilis qui impedit culpa aut sed rerum rem voluptatem.","type":"image","url":"http:\/\/mushtryati.app\/images\/test.jpg","created_at":"2015-12-21 14:27:35","updated_at":"2015-12-21 14:27:35","user":{"id":3,"name":"Niko Parisian","email":"Kiara.Pacocha@Powlowski.info","mobile":"+96597978803","active":1,"activation_code":null,"admin":0,"created_at":"2015-12-21 14:27:34","updated_at":"2015-12-21 14:27:34","thumbnail":{"id":3,"name":"http:\/\/mushtryati.app\/images\/test.png","imageable_id":3}},"favorites_count":{"media_id":2,"aggregate":3}},"comments":[{"id":21,"user_id":2,"media_id":2,"comment":"Quasi recusandae rerum amet explicabo et.","created_at":"2015-12-21 14:27:41","updated_at":"2015-12-21 14:27:41","user":{"id":2,"name":"Prof. Kallie Bauch Sr.","email":"Grady.Retha@yahoo.com","mobile":"+96597978803","active":1,"activation_code":null,"admin":0,"created_at":"2015-12-21 14:27:34","updated_at":"2015-12-21 14:27:34","thumbnail":{"id":2,"name":"http:\/\/mushtryati.app\/images\/test.png","imageable_id":2}}},{"id":57,"user_id":4,"media_id":2,"comment":"Quidem sed quae veniam quod similique neque.","created_at":"2015-12-21 14:27:41","updated_at":"2015-12-21 14:27:41","user":{"id":4,"name":"Elroy Ullrich PhD","email":"admin@test.com","mobile":"+96597978803","active":1,"activation_code":null,"admin":1,"created_at":"2015-12-21 14:27:34","updated_at":"2015-12-21 14:27:34","thumbnail":null}}],"hasFavorited":false}

    dispatch(mediaSuccess(media));
    //dispatch(mediaRequest());
    //return fetch(url)
    //  .then(response => response.json())
    //  .then(json => {
    //    dispatch(mediaSuccess(json))
    //  })
    //  .catch((err)=> {
    //    dispatch(mediaFailure(err))
    //  })
  }
}



/**
 * @param params
 * @returns {Function}
 * Favorite a media
 */
export function likeMedia(params) {
  return (dispatch) => {
    return fetch(API_ROOT + '/medias/like', {
      method: 'POST',
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(json => {
        dispatch(toggleLike(json));
      })
      .catch((err)=> {})
  }
}
