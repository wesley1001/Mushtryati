import {
  SET_USER,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE
} from '../../constants/ActionTypes';

const initialState = {
  current:null,
  isFetching:false,
  entity:null,
  error:null
}

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER:
    return { ... state, current:action.user }

    case USER_REQUEST:
    return {
      ... state,
      isFetching: true,
      error: null
    }

    case USER_SUCCESS:
    return {
      ... state,
      isFetching: false,
      entity: action.entity,
      error: null
    }

    case USER_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.error
    }
    default:
    return state;
  }
}
