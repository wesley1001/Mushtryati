import _ from 'lodash';

const initialState ={ users: {}, medias:{}, comments: {}, favorites:{}, downloads:{} };

export default function entities(state = initialState, action) {
  if (action.entities) {
    return _.merge({}, state, action.entities);
  }
  return state;
}