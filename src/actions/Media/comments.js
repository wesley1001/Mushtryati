import {API_ROOT} from './../../utils/config';
import { normalize, Schema, arrayOf } from 'normalizr';
import { Schemas } from './../../constants/Schema';

import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_FAILURE,
  COMMENT_SAVING,
  COMMENT_SAVED
} from '../../constants/ActionTypes';

function commentsSuccess(payload) {
  console.log(payload);
  const normalized = normalize(payload.data, Schemas.MEDIA);
  return {
    type: COMMENTS_SUCCESS,
    entities: normalized.entities
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

export function fetchMediaComments() {
  return (dispatch,state) => {
    dispatch({type:COMMENTS_REQUEST});
    const mediaID = state().mediaReducer.current;
    const url = API_ROOT + '/medias/' + mediaID + '/comments';
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(commentsSuccess(json));
      })
      .catch((err)=> {
        dispatch({type:COMMENTS_FAILURE,error:err});
      })
  }
}

export function addMediaComment(comment) {
  return (dispatch,state) => {
    dispatch(commentSaving());
    const params = {
      comment,
      user:state().userReducer.authUserID,
      media:state().mediaReducer.current
    };
    const url = API_ROOT + '/medias/comment';
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(json => dispatch(fetchMediaComments()))
      .catch((err)=> console.log('error',err))
  }
}