'use strict';

import React, { Component, StyleSheet, Text, View,  TouchableHighlight, TextInput, Image,ActivityIndicatorIOS } from 'react-native';
import {register} from '../actions/register';
import { connect } from 'react-redux/native';
var Actions = require('react-native-router-flux').Actions;

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }

    this.onRegisterPressed = this.onRegisterPressed.bind(this);
  }

  onRegisterPressed() {
    const {dispatch} = this.props;
    const inputs = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    dispatch(register(inputs, (cb)=> {
      if (cb.success) {
        Actions.login();
      }
    }));
  }

  render() {
    const { register } = this.props;

    if (register.processingRequest) {
      return (
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
          <ActivityIndicatorIOS size="large" animating={true}/>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <TextInput
            style={[styles.loginInput]}
            ref='name'
            placeholder="الاسم"
            onChangeText={(name) => this.setState({name})}
            />

          <TextInput
            style={[styles.loginInput]}
            ref='email'
            placeholder="الايميل"
            onChangeText={(email) => this.setState({email})}
            />

          <TextInput
            style={styles.loginInput}
            ref="password"
            placeholder="كلمة السر" secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            />

          <TextInput
            style={styles.loginInput}
            ref="password"
            placeholder="تأكيد كلمة السر" secureTextEntry={true}
            onChangeText={(password_confirmation) => this.setState({password_confirmation})}
            />

          <TouchableHighlight onPress={this.onRegisterPressed} style={styles.buttonGreen}>
            <Text style={styles.buttonText}>سجل</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={Actions.login}>
            <Text style={[styles.label,styles.textUnderline, styles.mTop20]}>يوجد الحساب ؟ اضغط للدخول</Text>
          </TouchableHighlight>

        </View>
      );
    }

  }

  /*
   { auth.validationErrors.length > 0 ? <Error errors={auth.validationErrors}/> : <Text>  </Text> }
   */
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
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
    marginTop: 10
  }
});
//
//
function mapStateToProps(state) {
  const { register } = state;
  return {
    ...state,
    register
  }
}

export default connect(mapStateToProps)(Register)
