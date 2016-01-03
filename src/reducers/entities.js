import merge from 'lodash/object/merge';

const initialState = {
  medias: {},
  users: {},
  comments:{},
};

export default function entities(state = initialState, action) {
  if (action.entities) {
    return merge({}, state, action.entities);
  }

  return state;
}
