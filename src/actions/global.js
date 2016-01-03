import {
  XHR_REQUEST,
  XHR_SUCCESS,
  XHR_FAILURE
} from './../constants/ActionTypes';

export function xhrRequest() {
  return {
    type: XHR_REQUEST
  }
}

export function xhrRequestSuccess() {
  return {
    type: XHR_SUCCESS
  }
}

export function xhrRequestFailure(error) {
  return {
    type: XHR_FAILURE,
    error: error
  }
}