'use strict'

import React, { Component, StyleSheet, Text, View,  TouchableHighlight, TextInput, Image,ActivityIndicatorIOS } from 'react-native'
import {login} from '../actions/auth.js'
import { connect } from 'react-redux/native'
import {getUser,saveUser} from './../utils/storage'


class SignIn extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.onLoginPressed = this.onLoginPressed.bind(this)
  }

  componentWillMount() {
    const {dispatch,actions} = this.props

    //getUser((user)=> {
    //  if (user != null) {
    //    return dispatch(actions.routes.tabBar.tab1())
    //  }
    //})
  }

  onLoginPressed() {
    const {dispatch,actions} = this.props
    dispatch(login(this.state.email, this.state.password, (cb)=> {
      if (cb.success) {
        saveUser(cb.user)
        return dispatch(actions.routes.tabBar.tab1())
      }
    }))
  }

  render() {
    const { actions, assets, auth } = this.props

    if (auth.loggingIn) {
      return (
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
          <ActivityIndicatorIOS size="large" animating={true}/>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>

          <Image style={styles.image} source={assets.mark}/>

          <TextInput
            style={[styles.loginInput,styles.mTop20]}
            ref='email'
            placeholder="الايميل"
            onChangeText={(email) => this.setState({email})}
            placeholderTextColor={'#E2E2E2'}
            autoFocus={true}
            autoCorrect={false}
            />

          <TouchableHighlight onPress={actions.routes.tabBar.tab1()} style={styles.ltr}>
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

          <TouchableHighlight onPress={this.onLoginPressed} style={styles.buttonGreen}>
            <Text style={styles.buttonText}>الدخول</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={actions.routes.register()}>
            <Text style={[styles.label,styles.textUnderline, styles.mTop20]}>لا يوجد الحساب ؟ سحل الان </Text>
          </TouchableHighlight>

        </View>
      )
    }

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
    marginTop: 50
  }
})

function mapStateToProps(state) {
  const { auth } = state
  return {
    ...state,
    auth
  }
}

export default connect(mapStateToProps)(SignIn)