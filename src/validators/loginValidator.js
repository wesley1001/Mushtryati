/**
 * ## formValidation
 * @param {Object} state - the Redux state object
 */
import _ from 'lodash';

export default function validate(state) {

  if (state.form.fields.email !== '' && state.form.fields.password !== '' && !state.form.fields.emailHasError && !state.form.fields.passwordHasError) {
    return state.setIn(['form', 'isValid'], true);
  } else {
    return state.setIn(['form', 'isValid'], false);
  }

}
