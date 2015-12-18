import {
  MEDIA_REQUEST,
  MEDIA_SUCCESS,
  MEDIA_FAILURE,
} from '../constants/ActionTypes'

const initialState = {
  entity: {},
  processingRequest: false,
  hasFavorited: false,
  error: null,
}

export default function media(state = initialState, action = {}) {
  switch (action.type) {
    case MEDIA_REQUEST:
      return {
        ... state,
        processingRequest: true,
        error: null
      }
    case MEDIA_SUCCESS:
      return {
        ... state,
        processingRequest: false,
        entity: action.entity,
        hasFavorited: action.hasFavorited,
        error: null
      }
    case MEDIA_FAILURE:
      return {
        ...state,
        processingRequest: false,
        error: action.error
      }
    default:
      return state
  }
}
