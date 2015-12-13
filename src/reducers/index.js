import {combineReducers} from 'redux'
import auth from '../reducers/auth'
import category from '../reducers/category'
import medias from '../reducers/media'

const rootReducer = combineReducers({
  auth,
  category,
  medias
})

export default rootReducer
