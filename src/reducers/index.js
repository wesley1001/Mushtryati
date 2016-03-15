import {combineReducers} from 'redux';

import user from 'Auth/user';
import login from 'Auth/login';
import register from 'Auth/register';
import medias from './medias';
import entities from './entities';
import media from './media';
import comments from './comments';
import favorites from './favorites';
import downloads from './downloads';

const rootReducer = combineReducers({
  entities,
  user,
  login,
  register,
  medias,
  media,
  comments,
  favorites,
  downloads
});

export default rootReducer;
