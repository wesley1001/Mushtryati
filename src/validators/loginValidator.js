/**
 * ## formValidation
 * @param {Object} state - the Redux state object
 */
import _ from 'lodash';

export default function validate(state) {

  if (state.fields.email !== ''
    &&
    state.fields.password !== ''
    && !state.fields.emailHasError
    && !state.fields.passwordHasError) {
    return {
      ...state,
      isValid: true
    }
  } else {
    return {
      ...
        state,
      isValid: false
    }
  }
}
