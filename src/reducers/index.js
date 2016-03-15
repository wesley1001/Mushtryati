import {combineReducers} from 'redux';
import entities from './entities';
import login from 'Auth/login';
import register from 'Auth/register';
import userReducer from 'user';
import mediasReducer from './medias';
import mediaReducer from './media';
import commentsReducer from './comments';
import favoritesReducer from './favorites';
import downloadsReducer from './downloads';

const rootReducer = combineReducers({
  entities,
  login,
  register,
  userReducer,
  mediasReducer,
  mediaReducer,
  commentsReducer,
  favoritesReducer,
  downloadsReducer
});

export default rootReducer;
