export default function validate(state) {

  const {fields} = state.form;

  if (!fields.emailHasError && !fields.passwordHasError) {
    return state.setIn(['form', 'isValid'], true);
  } else {
    return state.setIn(['form', 'isValid'], false);
  }

}
