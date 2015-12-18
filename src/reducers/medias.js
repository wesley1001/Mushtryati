import {
  MEDIAS_REQUEST,
  MEDIAS_SUCCESS,
  MEDIAS_FAILURE,
} from '../constants/ActionTypes'

const initialState = {
  collection: [],
  processingRequest: false,
  error: null
}

export default function medias(state = initialState, action = {}) {
  switch (action.type) {
    case MEDIAS_REQUEST:
      return {
        ... state,
        processingRequest: true,
        error: null
      }
    case MEDIAS_SUCCESS:
      return {
        ... state,
        processingRequest: false,
        collection: action.collection,
        error: null
      }
    case MEDIAS_FAILURE:
      return {
        ...state,
        processingRequest: false,
        error: action.error
      }
    default:
      return state
  }
}
