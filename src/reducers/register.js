import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  errors: []
};

export default function register(state = initialState, action = {}) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isFetching: true,
        validationErrors: []
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        validationErrors: []
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.validationErrors,
      };
    default:
      return state;
  }
}


