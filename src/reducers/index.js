import {combineReducers} from 'redux';
import user from './../reducers/user';
import login from './../reducers/login';
import register from './../reducers/register';
import medias from './../reducers/medias';
import media from './../reducers/media';

const rootReducer = combineReducers({
  user,
  login,
  register,
  medias,
  media,
});

export default rootReducer;
