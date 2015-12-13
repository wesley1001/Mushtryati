//import {checkStatus, parseJSON, API_ROOT} from './utils';
//import {CATEGORIES_REQUEST,CATEGORIES_SUCCESS,CATEGRIES_FAILURE, CATEGORIES_CLEAR } from '../constants/ActionTypes';
//
//function categoriesRequest() {
//  return {
//    type: CATEGORIES_REQUEST,
//    isFetching:true,
//    data:[]
//  };
//}
//
//function categoriesSuccess(payload) {
//  return {
//    type: CATEGORIES_SUCCESS,
//    isFetching:false,
//    data: payload.data
//  };
//}
//
//function categoriesFailure(error) {
//  return {
//    type: CATEGORIES_FAILURE,
//    isFetching:true,
//    data:[],
//    error,
//  };
//}
//
//function fetchCategories() {
//  return dispatch => {
//    dispatch(categoriesRequest());
//
//    return fetch(API_ROOT + '/categories')
//      .then(checkStatus)
//      .then(parseJSON)
//      .then(json => dispatch(categoriesSuccess(json)))
//      .catch(function(error) {
//        const response = error.response;
//        if (response === undefined) {
//          dispatch(categoriesFailure( error));
//        } else {
//          parseJSON(response)
//            .then(function(json) {
//              error.status = response.status;
//              error.statusText = response.statusText;
//              error.message = json.message;
//              dispatch(categoriesFailure(error));
//            });
//        }
//      });
//  };
//}
//
//export function fetchTopCategoriesIfNeeded() {
//  return (dispatch, getState) => {
//      return dispatch(fetchCategories());
//  };
//}
