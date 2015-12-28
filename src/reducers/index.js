import {combineReducers} from 'redux';

import user from './Auth/user';
import login from './Auth/login';
import register from './Auth/register';
import medias from './medias';
import media from './Media/media';
import comments from './Media/comments';
import favorites from './favorites';

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
