import {combineReducers} from 'redux';

import user from './auth/user';
import login from './auth/login';
import register from './auth/register';
import medias from './../reducers/medias';
import media from './../reducers/media';
import comments from './../reducers/comments';
import favorites from './../reducers/favorites';

const rootReducer = combineReducers({
  user,
  login,
  register,
  medias,
  media,
  comments,
  favorites
});

export default rootReducer;
