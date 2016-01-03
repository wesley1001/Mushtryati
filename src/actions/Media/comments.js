import {API_ROOT} from './../../utils/config';
import {
  COMMENTS_SUCCESS,
} from '../../constants/ActionTypes';

import {xhrRequest,xhrRequestFailure} from './../global';

function commentsSuccess(payload) {
  return {
    type: COMMENTS_SUCCESS,
    collection: payload.data
  }
}

function commentSaving() {
  return {
    type: COMMENT_SAVING
  }
}

function commentSaved(payload) {
  return {
    type: COMMENT_SAVED,
    comment: payload.comment
  }
}

export function fetchComments(mediaID) {
  return (dispatch) => {
    dispatch(xhrRequest());
    return fetch(API_ROOT + '/medias/' + mediaID + '/comments')
      .then(response => response.json())
      .then(json => {
        dispatch(commentsSuccess(json));
      })
      .catch((err)=> {
        dispatch(xhrRequestFailure(err));
      })
  }
}

export function addComment(inputs) {
  return (dispatch) => {
    dispatch(commentSaving());
    return fetch(API_ROOT + '/medias/comment', {
      method: 'POST',
      body: JSON.stringify(inputs)
    })
      .then(response => response.json())
      .then(json => {
        dispatch(commentSaved(json));
        dispatch(fetchComments(inputs.media));
      })
      .catch((err)=> {
      })
  }
}
