/**
 * # Login.js
 *
 * This class is a little complicated as it handles 4 states. It's also
 * a container so there is boilerplate from Redux similiar to ```App```.
 */
'use strict';

/**
 * ## Imports
 *
 * validate and underscore
 *
 */
import validate from 'validate.js';
import _ from 'lodash';

/**
 * ## Email validation setup
 * Used for validation of emails
 */
const emailConstraints = {
  from: {
    email: true
  }
};

/**
 * ## name validation rule
 * read the message.. ;)
 */
const namePattern = /^[a-zA-Z0-9]{6,12}$/;
const nameConstraints = {
  name: {
    format: {
      pattern: namePattern,
      flags: 'i',
      message: "must have 6-12 numbers, letters or special characters"
    }
  }
};

/**
 * ## password validation rule
 * read the message... ;)
 */
const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;
const passwordConstraints = {
  password: {
    format: {
      pattern: passwordPattern,
      flags: "i",
      message: "have at least a number and a special character,"
      + " and between 6-12 in length"
    }
  }
};

const passwordConfirmationConstraints = {
  confirmPassword: {
    equality: "password"
  }
};

/**
 * ## Field Validation
 * @param {Object} state Redux state
 * @param {Object} action type & payload
 */
export default function rules(state, action) {
  const {field, value} = action.payload;

  switch (field) {
  /**
   * ### name validation
   * set the form field error
   */
    case('name'):
      let validName = _.isUndefined(validate({name: value},
        nameConstraints));
      if (validName) {
        return Object.assign({}, state, _.set(state.form.fields, 'nameHasError', false));
      } else {
        return Object.assign({}, state, _.set(state.form.fields, 'nameHasError', true));
      }
      break;

  /**
   * ### email validation
   * set the form field error
   */
    case('email'):
      let validEmail = _.isUndefined(validate({from: value},
        emailConstraints));
      if (validEmail) {
        return Object.assign({}, state, _.set(state.form.fields, 'emailHasError', false));
      } else {
        return Object.assign({}, state, _.set(state.form.fields, 'emailHasError', true));
      }
      break;

  /**
   * ### password validation
   * set the form field error
   */
    case('password'):
      let validPassword = _.isUndefined(validate({password: value},
        passwordConstraints));
      if (validPassword) {
        return Object.assign({}, state, _.set(state.form.fields, 'passwordHasError', false));
      } else {
        return Object.assign({}, state, _.set(state.form.fields, 'passwordHasError', true));
      }
      break;

  /**
   * ### passwordConfirmation validation
   * set the form field error
   */
    case('passwordConfirmation'):
      var validPasswordAgain
        = _.isUndefined(validate({
        password: state.form.fields.password,
        confirmPassword: value
      }, passwordConfirmationConstraints));
      if (validPasswordAgain) {
        return Object.assign({}, state, _.set(state.form.fields, 'passwordConfirmationHasError', false));
      } else {
        return Object.assign({}, state, _.set(state.form.fields, 'passwordConfirmationHasError', false));
      }
      break;
  }

  return state;

}
