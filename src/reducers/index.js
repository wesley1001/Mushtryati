import {combineReducers} from 'redux';

import global from './global'
import user from './Auth/user';
import login from './Auth/login';
import register from './Auth/register';
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
