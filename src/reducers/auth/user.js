import {Record,List} from 'immutable';

import {
  FAVORITES_REQUEST,
  FAVORITES_SUCCESS,
  FAVORITES_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  SET_USER,

} from '../../constants/ActionTypes';

const InitialState= Record({
  isAuthenticated :false,
  authUserID:null, // authenticated user ID
  isFetching:false,
  favorites:new (Record({
    isFetching:false,
    error:null
  })),
  appointments:new (Record({
    isFetching:false,
    error:null
  })),
  appointment:new (Record({
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
    case APPOINTMENTS_REQUEST:
      return state
        .setIn(['appointments', 'isFetching'], true)
        .setIn(['appointments', 'error'], null);
    case APPOINTMENTS_SUCCESS:
      return state
        .setIn(['appointments', 'isFetching'], false)
        .setIn(['appointments', 'error'], null)
    //.setIn(['appointments', 'collection'], action.collection);
    case APPOINTMENTS_FAILURE:
      return state
        .setIn(['appointments', 'isFetching'], false)
        .setIn(['appointments', 'error'], action.error);
    case CREATE_APPOINTMENT_REQUEST:
      return state
        .setIn(['appointment', 'isCreating'], true)
        .setIn(['appointment', 'created'], false)
        .setIn(['appointment', 'error'], null);
    case CREATE_APPOINTMENT_SUCCESS:
      return state
        .setIn(['appointment', 'isCreating'], false)
        .setIn(['appointment', 'created'], true)
        .setIn(['appointment', 'error'], null);
    case CREATE_APPOINTMENT_FAILURE:
      return state
        .setIn(['appointment', 'isCreating'], false)
        .setIn(['appointment', 'created'], false)
        .setIn(['appointment', 'error'], action.error);
    case INVALIDATE_APPOINTMENT:
      return state
        .setIn(['appointment', 'isCreating'], false)
        .setIn(['appointment', 'created'], false)
        .setIn(['appointment', 'error'], false);
    case DELETE_APPOINTMENT:
      return state;
    //return state
    //.setIn(['appointments','collection'],state.appointments.collection.filter((appointment) => appointment.id != action.id));
    case FAVORITES_REQUEST:
      return state
        .setIn(['favorites', 'isFetching'], true)
        .setIn(['favorites', 'error'], null);
    case FAVORITES_SUCCESS:
      return state
        .setIn(['favorites', 'isFetching'], false)
        .setIn(['favorites', 'error'], null)
    //.setIn(['favorites', 'collection'], action.collection);
    case FAVORITES_FAILURE:
      return state
        .setIn(['favorites', 'isFetching'], false)
        .setIn(['favorites', 'error'], action.error);
    case FAVORITE_COMPANY:
      return state;
    //return state
    //  .setIn(['favorites','collection'],state.favorites.collection.concat(action.entity));
    case UNFAVORITE_COMPANY:
      return state;
    //return state
    //  .setIn(['favorites','collection'],state.favorites.collection.filter((favorite) => favorite.id != action.entity.id));
    case LOGOUT_USER:
      return state
        .set('authUserID',null)
        .set('isAuthenticated',false)
    //.setIn(['favorites','collection'],[])
    //.setIn(['appointments','collection'],[]);
    default:
      return state;


  }
}