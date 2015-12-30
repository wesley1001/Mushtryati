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

  const data = {
    "data": {
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
        },
        "medias": [
            {
                "id": 1,
                "user_id": 1,
                "caption": "Corporis asperiores consequatur animi id ea et fuga ex aliquid sed est quos sed ea dolore neque voluptatum eos qui placeat natus vel et quam eum itaque vel cum inventore pariatur aut aspernatur consequuntur asperiores quia eos aliquam iusto ducimus occaecati laboriosam autem adipisci in magnam aut nihil quod aperiam et molestiae consequuntur nesciunt qui dolore est voluptates.",
                "type": "image",
                "url": "http://mushtryati.app/images/test.jpg",
                "created_at": "2015-12-29 18:32:00",
                "updated_at": "2015-12-29 18:32:00"
            },
            {
                "id": 11,
                "user_id": 1,
                "caption": "Incidunt inventore quia ut error voluptas et et iste vel eligendi aut cumque vitae architecto sint necessitatibus porro odit qui sit quo maxime et error aut est autem autem dolor quam quas corporis neque autem eos hic incidunt reprehenderit sequi iusto non ad animi dolorum asperiores laudantium sed ipsum rem alias doloremque.",
                "type": "image",
                "url": "http://mushtryati.app/images/test.jpg",
                "created_at": "2015-12-29 18:32:01",
                "updated_at": "2015-12-29 18:32:01"
            },
            {
                "id": 18,
                "user_id": 1,
                "caption": "Laborum voluptatem ut illo minima amet tempora voluptatem sed exercitationem et sint qui deleniti voluptates excepturi est omnis adipisci nemo est et id ut totam voluptates consectetur ducimus id non consequatur quibusdam tempora voluptas eaque et id perferendis esse molestiae vel eos laudantium fugit dolorem asperiores.",
                "type": "image",
                "url": "http://mushtryati.app/images/test.jpg",
                "created_at": "2015-12-29 18:32:01",
                "updated_at": "2015-12-29 18:32:01"
            }
        ]
    }
}



  const url = API_ROOT + '/user/' + userID ;
  return (dispatch) => {
    dispatch(userSuccess(data));
    // dispatch(userRequest());
    // return fetch(url)
    // .then(response => response.json())
    // .then(json => {
    //   dispatch(userSuccess(json));
    // })
    // .catch((err)=> {
    //   dispatch(userFailure(err))
    // })
  }
}
