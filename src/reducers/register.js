import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from '../constants/ActionTypes';

const initialState = {
  processingRequest: false,
  errors: []
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        processingRequest: true,
        validationErrors: []
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        processingRequest: false,
        validationErrors: []
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        processingRequest: false,
        errors: action.validationErrors,
      };
    default:
      return state;
  }
}


