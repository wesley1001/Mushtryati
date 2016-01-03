import merge from 'lodash/object/merge';

const initialState = {
  medias: {},
  users: {},
  comments:{}
};

export default function entities(state = initialState, action) {

  Object.freeze(initialState);

  if (action.entities) {
    return Object.assign({},state, action.entities);
    //return merge({}, state, action.entities);
  }

  return state;
}
