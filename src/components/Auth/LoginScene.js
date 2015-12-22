'use strict'
import React, { Component, StyleSheet, Text, View,  TouchableHighlight, TextInput, Image } from 'react-native';
import t from 'tcomb-form-native';
import FormButton from './../FormButton';
import stylesheet from './../../styles/form';
import LoadingIndicator from './../LoadingIndicator';
import {assets} from './../../utils/assets';
const Form = t.form.Form;

export default class LoginScene extends Component {

  handleLogin() {
    this.props.onLoginPressed();
  }

  handleForgotPasswordRoutePress() {
    this.props.onForgotPasswordRoutePress();
  }

  handleRegisterRoutePress() {
    this.props.onRegisterRoutePress();
  }

  render() {

    Form.stylesheet = stylesheet;

    const {login} = this.props;

    let email = {
      label: 'الايميل',
      placeholder: 'الايميل',
      keyboardType: 'email-address',
      editable: !login.isFetching,
      hasError: login.form.fields.emailHasError,
      error: 'Please enter valid email',
    };

    let password = {
      label: 'كلمة السر',
      placeholder: 'كلمة السر',
      maxLength: 12,
      secureTextEntry: true,
      editable: !login.isFetching,
      hasError: login.form.fields.passwordHasError,
      error: 'Must have 6-12 numbers, letters or special characters',
    };

    const loginForm = t.struct({
      email: t.String,
      password: t.String
    });

    const options = {
      fields: {
        email: email,
        password: password
      }
    };

    return (

      <View style={{flex: 1,padding: 10}}>
        <Image style={styles.image} source={assets.mark}/>

        {login.isFetching ? <LoadingIndicator /> : <View />}

        <Form ref="form"
              type={loginForm}
              options={options}
              value={this.props.credentials}
              onChange={this.props.onChange}
          />
        <FormButton
          isDisabled={!login.form.isValid || login.isFetching}
          onPress={this.handleLogin.bind(this)}
          buttonText='الدخول'/>

        <TouchableHighlight onPress={this.handleRegisterRoutePress.bind(this)} underlayColor='transparent'>
          <Text style={[styles.label,styles.center,styles.textUnderline]}>لا يوجد الحساب ؟ سحل الان </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.handleForgotPasswordRoutePress.bind(this)} style={styles.center}
                            underlayColor='transparent'>
          <Text style={[styles.label,styles.textUnderline, styles.mTop20]}>نسيت كلمة السر</Text>
        </TouchableHighlight>

      </View>
    )
  }

}

var styles = StyleSheet.create({

  image: {
    height: 100,
    marginTop: 80,
    alignSelf: 'center'
  },
  label: {
    fontSize: 14,
    color: '#888888',
  },
  textUnderline: {
    textDecorationLine: 'underline'
  },
  ltr: {
    alignSelf: 'flex-start'
  },
  rtl: {
    alignSelf: 'flex-end'
  },
  center: {
    alignSelf: 'center'
  },
  mTop20: {
    marginTop: 50
  }
})