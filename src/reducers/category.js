import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE, CATEGORIES_CLEAR } from '../constants/ActionTypes';

export default function category(state = {}, action={}) {
  switch (action.type) {
  case CATEGORIES_REQUEST:
  case CATEGORIES_SUCCESS:
  case CATEGORIES_FAILURE:
  case CATEGORIES_CLEAR:
    return Object.assign({}, state, action);
  default:
    return state;
  }
}
