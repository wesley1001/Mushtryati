/**
 * ## formValidation
 * @param {Object} state - the Redux state object
 */
import _ from 'lodash';

export default function validate(state) {

  let isValid = false;
  if (state.form.fields.email !== '' && state.form.fields.password !== '' && !state.form.fields.emailHasError && !state.form.fields.passwordHasError) {
    isValid = true;
  } else {
    isValid = false;
  }

  return {
    ...state,
    isValid: isValid
  }
}
