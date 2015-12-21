'use strict'
import React, { Component, StyleSheet, Text, View,  TouchableHighlight, TextInput, Image } from 'react-native';
import {assets} from './../../utils/assets';
import t from 'tcomb-form-native';
let Form = t.form.Form;


export default class LoginScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleLogin = () => {
    let credentials = {
      email: this.state.email,
      password: this.state.password
    }
    return this.props.onLoginPressed(credentials);
  }


  handleForgotPasswordRoute = () => {
    return this.props.onForgotPasswordRouteClick();
  }

  handleRegisterRoute = () => {
    return this.props.onRegisterRouteClick();
  }

  render() {

    let options = {
      auto: 'placeholders',
      fields: {}
    };

    let email = {
      label: 'Email',
      keyboardType: 'email-address',
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.emailHasError,
      error: 'Please enter valid email'
    };

    let password = {
      label: 'Password',
      maxLength: 12,
      secureTextEntry: true,
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.passwordHasError,
      error: 'Must have 6-12 characters with at least 1 number and 1 special character'
    };

    const loginForm = t.struct({
      email: t.String,
      password: t.String
    });
    options.fields['email'] = email;
    options.fields['password'] = password;

    return (

      <View style={{flex: 1}}>

        <Image style={styles.image} source={assets.mark}/>
        <Form ref="form"
              type={loginForm}
              options={options}
              value={this.props.value}
              onChange={this.props.onChange}
          />
      </View>
    )
  }

}

var styles = StyleSheet.create({

  loginInput: {
    height: 50,
    padding: 10,
    fontSize: 18,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    borderBottomColor: '#48BBEC',
    borderRadius: 0,
    color: '#5BC3BE',
    textAlign: 'right'
  },
  buttonGreen: {
    height: 50,
    backgroundColor: '#5BC3BE',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
  image: {
    height: 100,
    marginBottom: 10
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
  mTop20: {
    marginTop: 50
  }
})