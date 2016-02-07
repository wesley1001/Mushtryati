'use strict';
import React, { Component, StyleSheet, Text, View,  TouchableHighlight, TextInput} from 'react-native';

export default class RegisterScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }

    this.onRegisterPress = this.onRegisterPress.bind(this);
  }

  onRegisterPress() {
    const inputs = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }

    this.props.onRegisterSubmit(inputs);
  }

  onLoginRoutePress = () => {
    return this.props.onLoginRouteClick();
  };

  render() {

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

        <TouchableHighlight onPress={this.onRegisterPress} style={styles.buttonGreen}>
          <Text style={styles.buttonText}>سجل</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.onLoginRoutePress}>
          <Text style={[styles.label,styles.textUnderline, styles.mTop20]}>يوجد الحساب ؟ اضغط للدخول</Text>
        </TouchableHighlight>

      </View>
    );

  }

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