import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  collection: [],
  processingRequest: false,
  error: null
}

export default function comments(state = initialState, action = {}) {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ... state,
        processingRequest: true,
        error: null
      }
    case COMMENTS_SUCCESS:
      return {
        ... state,
        processingRequest: false,
        collection: action.collection,
        error: null
      }
    case COMMENTS_FAILURE:
      return {
        ...state,
        processingRequest: false,
        error: action.error
      }
    default:
      return state
  }
}
