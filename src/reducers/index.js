import {combineReducers} from 'redux'
import auth from '../reducers/auth'
import category from '../reducers/category'
import medias from '../reducers/media'
import {reducer as router } from 'react-native-router-redux';

const rootReducer = combineReducers({
  auth,
  category,
  router,
  medias
})

export default rootReducer
