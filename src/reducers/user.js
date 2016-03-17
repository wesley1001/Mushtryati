import { Record } from 'immutable';
import {
  FAVORITES_REQUEST,
  FAVORITES_SUCCESS,
  FAVORITES_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  SET_USER,
  SET_CURRENT_USER,
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  INVALIDATE_COMMENT,
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE
} from '../constants/actiontypes';

const InitialState= Record({
  isAuthenticated :false,
  authUserID:1, // authenticated user ID
  current:null,
  isFetching:false,
  favorites:new (Record({
    isFetching:false,
    error:null
  })),
  downloads:new (Record({
    isFetching:false,
    error:null
  })),
  comments:new (Record({
    isFetching:false,
    error:null
  })),
  comment:new (Record({
    isCreating:false,
    created:false,
    error:null
  }))
});

const initialState = new InitialState;

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state
        .set('authUserID',action.userID)
        .set('isAuthenticated',true);
    case CREATE_COMMENT_REQUEST:
      return state
        .setIn(['comment', 'isCreating'], true)
        .setIn(['comment', 'created'], false)
        .setIn(['comment', 'error'], null);
    case CREATE_COMMENT_SUCCESS:
      return state
        .setIn(['comment', 'isCreating'], false)
        .setIn(['comment', 'created'], true)
        .setIn(['comment', 'error'], null);
    case CREATE_COMMENT_FAILURE:
      return state
        .setIn(['comment', 'isCreating'], false)
        .setIn(['comment', 'created'], false)
        .setIn(['comment', 'error'], action.error);
    case INVALIDATE_COMMENT:
      return state
        .setIn(['comment', 'isCreating'], false)
        .setIn(['comment', 'created'], false)
        .setIn(['comment', 'error'], false);
    case FAVORITES_REQUEST:
      return state
        .setIn(['favorites', 'isFetching'], true)
        .setIn(['favorites', 'error'], null);
    case FAVORITES_SUCCESS:
      return state
        .setIn(['favorites', 'isFetching'], false)
        .setIn(['favorites', 'error'], null)
    case FAVORITES_FAILURE:
      return state
        .setIn(['favorites', 'isFetching'], false)
        .setIn(['favorites', 'error'], action.error);
    case LOGOUT_USER:
      return state
        .set('authUserID',null)
        .set('isAuthenticated',false);
    case SET_CURRENT_USER:
      return state
        .set('current',action.current);
    default:
      return state;


  }
}