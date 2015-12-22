'use strict';

import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import {connect} from 'react-redux/native';

import {Record} from 'immutable';

export default class Master extends Component {

  render() {
    const InitialState = Record({
      isValid: false,
      isFetching: false,
      form: new (Record({
        disabled: false,
        error: null,
        fields: new (Record({
          email: '',
          emailHasError: false,
          password: '',
          passwordHasError: false
        }))
      }))
    });

    var initialState = new InitialState;

    var a = initialState.setIn(['form', 'fields', 'emailHasError'], true);
    var b = initialState.setIn(['form', 'disabled'], true);

    console.log('username has error is ', initialState.form.fields.emailHasError);
    console.log('disabled', initialState.form.disabled);

    console.log('after username has error is  ', a.form.fields.emailHasError);
    console.log('after disabled is', b.form.disabled);

    return (
      <View style={[styles.container]}>
        <Text style={styles.text}>Push detail view</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
    width: 100,
  },
  text: {
    color: '#000000',
  },
});
