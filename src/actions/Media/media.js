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

    // var media = {"data":{"id":4,"user_id":3,"caption":"Tenetur fuga autem aperiam est molestias deserunt veritatis tempora eaque eveniet voluptatem sed omnis doloribus et excepturi nam perspiciatis corrupti quis qui qui qui laboriosam eligendi ullam reprehenderit perferendis quod est omnis aperiam id recusandae in veritatis necessitatibus quisquam necessitatibus itaque voluptatem ad architecto sequi temporibus aut assumenda possimus facere laborum.","type":"image","url":"http:\/\/mushtryati.app\/images\/test.jpg","created_at":"2015-12-21 14:27:35","updated_at":"2015-12-21 14:27:35","user":{"id":3,"name":"Niko Parisian","email":"Kiara.Pacocha@Powlowski.info","mobile":"+96597978803","active":1,"activation_code":null,"admin":0,"created_at":"2015-12-21 14:27:34","updated_at":"2015-12-21 14:27:34","thumbnail":{"id":3,"name":"http:\/\/mushtryati.app\/images\/test.png","imageable_id":3}},"favorites_count":{"media_id":4,"aggregate":6}},"comments":[{"id":36,"user_id":4,"media_id":4,"comment":"Omnis et aut dolorem impedit.","created_at":"2015-12-21 14:27:41","updated_at":"2015-12-21 14:27:41","user":{"id":4,"name":"Elroy Ullrich PhD","email":"admin@test.com","mobile":"+96597978803","active":1,"activation_code":null,"admin":1,"created_at":"2015-12-21 14:27:34","updated_at":"2015-12-21 14:27:34","thumbnail":null}},{"id":54,"user_id":1,"media_id":4,"comment":"Harum quos et nihil.","created_at":"2015-12-21 14:27:41","updated_at":"2015-12-21 14:27:41","user":{"id":1,"name":"Giuseppe Little","email":"vKulas@Gerlach.net","mobile":"+96597978803","active":1,"activation_code":null,"admin":0,"created_at":"2015-12-21 14:27:34","updated_at":"2015-12-21 14:27:34","thumbnail":{"id":1,"name":"http:\/\/mushtryati.app\/images\/test.png","imageable_id":1}}},{"id":79,"user_id":4,"media_id":4,"comment":"Exercitationem ut sunt est.","created_at":"2015-12-21 14:27:42","updated_at":"2015-12-21 14:27:42","user":{"id":4,"name":"Elroy Ullrich PhD","email":"admin@test.com","mobile":"+96597978803","active":1,"activation_code":null,"admin":1,"created_at":"2015-12-21 14:27:34","updated_at":"2015-12-21 14:27:34","thumbnail":null}}],"hasFavorited":true}
  var media =   {
        "data": {
            "id": 1,
            "user_id": 1,
            "caption": "Corporis asperiores consequatur animi id ea et fuga ex aliquid sed est quos sed ea dolore neque voluptatum eos qui placeat natus vel et quam eum itaque vel cum inventore pariatur aut aspernatur consequuntur asperiores quia eos aliquam iusto ducimus occaecati laboriosam autem adipisci in magnam aut nihil quod aperiam et molestiae consequuntur nesciunt qui dolore est voluptates.",
            "type": "image",
            "url": "http://mushtryati.app/images/test.jpg",
            "created_at": "2015-12-29 18:32:00",
            "updated_at": "2015-12-29 18:32:00",
            "user": {
                "id": 1,
                "name": "Malvina Schmeler",
                "email": "Nicholas.Monahan@Dooley.com",
                "mobile": "+96597978803",
                "active": 1,
                "activation_code": null,
                "admin": 0,
                "created_at": "2015-12-29 18:31:58",
                "updated_at": "2015-12-29 18:31:58",
                "thumbnail": {
                    "id": 1,
                    "name": "http://mushtryati.app/images/test.png",
                    "imageable_id": 1
                }
            },
            "favorites_count": {
                "media_id": 1,
                "aggregate": 1
            }
        },
        "comments": [
            {
                "id": 5,
                "user_id": 9,
                "media_id": 1,
                "comment": "Qui voluptatem et repudiandae ea.",
                "created_at": "2015-12-29 18:32:06",
                "updated_at": "2015-12-29 18:32:06",
                "user": {
                    "id": 9,
                    "name": "Oleta Carroll PhD",
                    "email": "Eileen.Bernier@yahoo.com",
                    "mobile": "+96597978803",
                    "active": 1,
                    "activation_code": null,
                    "admin": 0,
                    "created_at": "2015-12-29 18:31:58",
                    "updated_at": "2015-12-29 18:31:58",
                    "thumbnail": {
                        "id": 9,
                        "name": "http://mushtryati.app/images/test.png",
                        "imageable_id": 9
                    }
                }
            },
            {
                "id": 10,
                "user_id": 1,
                "media_id": 1,
                "comment": "Ullam laudantium nisi quaerat autem et.",
                "created_at": "2015-12-29 18:32:06",
                "updated_at": "2015-12-29 18:32:06",
                "user": {
                    "id": 1,
                    "name": "Malvina Schmeler",
                    "email": "Nicholas.Monahan@Dooley.com",
                    "mobile": "+96597978803",
                    "active": 1,
                    "activation_code": null,
                    "admin": 0,
                    "created_at": "2015-12-29 18:31:58",
                    "updated_at": "2015-12-29 18:31:58",
                    "thumbnail": {
                        "id": 1,
                        "name": "http://mushtryati.app/images/test.png",
                        "imageable_id": 1
                    }
                }
            },
            {
                "id": 15,
                "user_id": 4,
                "media_id": 1,
                "comment": "Consequatur voluptas et at ut quod error.",
                "created_at": "2015-12-29 18:32:06",
                "updated_at": "2015-12-29 18:32:06",
                "user": {
                    "id": 4,
                    "name": "Roselyn O'Conner DDS",
                    "email": "Schmeler.Yessenia@hotmail.com",
                    "mobile": "+96597978803",
                    "active": 1,
                    "activation_code": null,
                    "admin": 0,
                    "created_at": "2015-12-29 18:31:58",
                    "updated_at": "2015-12-29 18:31:58",
                    "thumbnail": {
                        "id": 4,
                        "name": "http://mushtryati.app/images/test.png",
                        "imageable_id": 4
                    }
                }
            },
            {
                "id": 17,
                "user_id": 2,
                "media_id": 1,
                "comment": "Et quis aut magni corporis.",
                "created_at": "2015-12-29 18:32:06",
                "updated_at": "2015-12-29 18:32:06",
                "user": {
                    "id": 2,
                    "name": "Janie Schinner",
                    "email": "Althea42@Crooks.net",
                    "mobile": "+96597978803",
                    "active": 1,
                    "activation_code": null,
                    "admin": 0,
                    "created_at": "2015-12-29 18:31:58",
                    "updated_at": "2015-12-29 18:31:58",
                    "thumbnail": {
                        "id": 2,
                        "name": "http://mushtryati.app/images/test.png",
                        "imageable_id": 2
                    }
                }
            },
            {
                "id": 47,
                "user_id": 4,
                "media_id": 1,
                "comment": "Est cum atque esse.",
                "created_at": "2015-12-29 18:32:07",
                "updated_at": "2015-12-29 18:32:07",
                "user": {
                    "id": 4,
                    "name": "Roselyn O'Conner DDS",
                    "email": "Schmeler.Yessenia@hotmail.com",
                    "mobile": "+96597978803",
                    "active": 1,
                    "activation_code": null,
                    "admin": 0,
                    "created_at": "2015-12-29 18:31:58",
                    "updated_at": "2015-12-29 18:31:58",
                    "thumbnail": {
                        "id": 4,
                        "name": "http://mushtryati.app/images/test.png",
                        "imageable_id": 4
                    }
                }
            },
            {
                "id": 65,
                "user_id": 11,
                "media_id": 1,
                "comment": "Dolorum corporis aut dolores aliquam.",
                "created_at": "2015-12-29 18:32:07",
                "updated_at": "2015-12-29 18:32:07",
                "user": {
                    "id": 11,
                    "name": "Dr. Kay Hagenes",
                    "email": "admin@test.com",
                    "mobile": "+96597978803",
                    "active": 1,
                    "activation_code": null,
                    "admin": 1,
                    "created_at": "2015-12-29 18:31:59",
                    "updated_at": "2015-12-29 18:31:59",
                    "thumbnail": null
                }
            },
            {
                "id": 73,
                "user_id": 1,
                "media_id": 1,
                "comment": "Ullam earum nihil illo sed.",
                "created_at": "2015-12-29 18:32:07",
                "updated_at": "2015-12-29 18:32:07",
                "user": {
                    "id": 1,
                    "name": "Malvina Schmeler",
                    "email": "Nicholas.Monahan@Dooley.com",
                    "mobile": "+96597978803",
                    "active": 1,
                    "activation_code": null,
                    "admin": 0,
                    "created_at": "2015-12-29 18:31:58",
                    "updated_at": "2015-12-29 18:31:58",
                    "thumbnail": {
                        "id": 1,
                        "name": "http://mushtryati.app/images/test.png",
                        "imageable_id": 1
                    }
                }
            }
        ],
        "hasFavorited": false
    }
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
