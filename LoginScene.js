'use strict'
import React, { Component, StyleSheet, Text, View,  TouchableHighlight, TextInput, Image } from 'react-native';
import {assets} from './../../utils/assets';
import FormButton from './../../components/FormButton';

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
    return (
      <View style={{flex: 1,padding: 10,justifyContent: 'center',alignItems: 'center'}}>

        <Image style={styles.image} source={assets.mark}/>


        {login.isFetching ?  <LoadingIndicator /> : <View />}

        <TextInput
          style={[styles.loginInput,styles.mTop20]}
          ref='email'
          placeholder="الايميل"
          onChangeText={(email) => this.setState({email})}
          placeholderTextColor={'#E2E2E2'}
          autoFocus={true}
          autoCorrect={false}
          />

        <TouchableHighlight onPress={this.handleForgotPasswordRoute} style={styles.ltr} underlayColor='transparent'>
          <Text style={[styles.label,styles.textUnderline]}>نسيت كلمة السر</Text>
        </TouchableHighlight>

        <TextInput
          style={[styles.loginInput]}
          ref="password"
          placeholder="كلمة السر" secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          placeholderTextColor={'#E2E2E2'}
          autoFocus={false}
          autoCorrect={false}
          />

        <FormButton
          isDisabled={!this.props.auth.form.isValid || this.props.auth.form.isFetching}
          onPress={onButtonPress.bind(self)}
          buttonText={loginButtonText}/>

        <TouchableHighlight onPress={this.handleLogin} style={styles.buttonGreen} underlayColor='transparent'>
          <Text style={styles.buttonText}>الدخول</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.handleRegisterRoute} underlayColor='transparent'>
          <Text style={[styles.label,styles.textUnderline, styles.mTop20]}>لا يوجد الحساب ؟ سحل الان </Text>
        </TouchableHighlight>

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