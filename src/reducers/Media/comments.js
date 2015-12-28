import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_FAILURE,
  COMMENT_SAVING,
  COMMENT_SAVED
} from '../../constants/ActionTypes'

const initialState = {
  collection: [],
  isFetching: false,
  error: null
}

export default function comments(state = initialState, action = {}) {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ... state,
        isFetching: true,
        error: null
      }
    case COMMENTS_SUCCESS:
      return {
        ... state,
        isFetching: false,
        collection: action.collection,
        error: null
      }
    case COMMENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case COMMENT_SAVING:
      return {
        ...state,
        isFetching: true
      }
    case COMMENT_SAVED:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}
