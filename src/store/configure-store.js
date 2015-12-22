import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';
const logger = createLogger();
import {LoginInitialState } from './../reducers/login';
import {UserInitialState } from './../reducers/user';
import {MediaInitialState } from './../reducers/media';
import {MediasInitialState } from './../reducers/medias';
import {CommentsInitialState } from './../reducers/comments';
import {FavoritesInitialState } from './../reducers/favorites';
import {RegisterInitialState } from './../reducers/register';

function getInitialState() {
  const _initState = {
    login: new LoginInitialState,
    user: UserInitialState,
    media: MediaInitialState,
    medias: MediasInitialState,
    comments: CommentsInitialState,
    favorites: FavoritesInitialState,
    register: RegisterInitialState,
  };
  return _initState;
}

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore);

export default function configureStore() {
  return createStoreWithMiddleware(rootReducer);
}
