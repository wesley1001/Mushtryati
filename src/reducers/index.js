import {combineReducers} from 'redux';

import global from './global'
import user from './auth/user';
import login from './auth/login';
import register from './auth/register';
import medias from './medias';
import entities from './entities';
import media from './Media/media';
import comments from './Media/comments';
import favorites from './favorites';

const rootReducer = combineReducers({
  global,
  entities,
  user,
  login,
  register,
  medias,
  media,
  comments,
  favorites
});

export default rootReducer;
