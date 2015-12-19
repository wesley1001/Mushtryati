'use strict'
import React, { Component, StyleSheet, Text, View,  TouchableHighlight, TextInput, Image,ActivityIndicatorIOS } from 'react-native';
import {login} from '../actions/login';
import {connect} from 'react-redux/native';
import {getUser,saveUser} from './../utils/storage';
import LoadingIndicator from './../components/LoadingIndicator';
import LoginScene from './../components/Auth/LoginScene';
import {assets} from './../utils/assets';

const Actions = require('react-native-router-flux').Actions;

class Login extends Component {

  componentWillMount() {
    const {dispatch} = this.props

    //getUser((user)=> {
    //  if (user != null) {
    //    return dispatch(actions.routes.tabBar.tab1())
    //  }
    //})
  }

  handleLogin = (credentials) => {

    const {dispatch} = this.props;

    dispatch(login(credentials, (cb)=> {
      if (cb.success) {
        //saveUser(cb.user);
        return Actions.tabBar();
      }
    }));

  }

  handleRegisterRoute = () => {
    return Actions.register();
  }

  handleForgotPasswordRoute = () => {
    // @todo: implement route

    return Actions.tabBar();
  }

  render() {
    const { assets, login } = this.props

    if (login.processingRequest) {
      return <LoadingIndicator />;
    }

    return (
      <LoginScene
        onLoginPressed={this.handleLogin}
        onRegisterRouteClick={this.handleRegisterRoute}
        onForgotPasswordRouteClick={this.handleForgotPasswordRoute} mark={assets.mark}
        />
    );

  }

}

function mapStateToProps(state) {
  const { login } = state
  return {
    ...state,
    login
  }
}

export default connect(mapStateToProps)(Login)