import {
  FAVORITES_REQUEST,
  FAVORITES_SUCCESS,
  FAVORITES_FAILURE,
} from '../constants/ActionTypes'

const initialState = {
  collection: [],
  isFetching: false,
  error: null
}

export default function comments(state = initialState, action = {}) {
  switch (action.type) {
    case FAVORITES_SUCCESS:
      return {
        ... state,
        isFetching: false,
        collection: action.collection,
        error: null
      }
    default:
      return state
  }
}
