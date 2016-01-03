import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_FAILURE,
  COMMENT_SAVING,
  COMMENT_SAVED
} from '../../constants/ActionTypes';

const initialState = {
  collection: [],
  isFetching: false,
  error: null
};

export default function comments(state = initialState, action = {}) {
  switch (action.type) {
    case COMMENT_SAVING:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
}
