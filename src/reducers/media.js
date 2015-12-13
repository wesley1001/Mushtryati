import {
  MEDIA_REQUEST,
  MEDIA_SUCCESS,
  MEDIA_FAILURE,
  SELECTED_MEDIA,
} from '../constants/ActionTypes'

const initialState = {
  data: [],
  loading:false,
  selected: {}
}

export default function medias(state = initialState, action = {}) {
  switch (action.type) {
    case SELECTED_MEDIA:
      return {
        ...state,
        selected:action.selected
      }
    case MEDIA_REQUEST:
      return {
        ... state,
        loading: true
      }
    case MEDIA_SUCCESS:
      return {
        ... state,
        loading: false,
        data: action.data
      }
    case MEDIA_FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
