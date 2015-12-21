'use strict'
import React, { Component } from 'react-native';
import LoadingIndicator from './../components/LoadingIndicator';
import LoginScene from './../components/Auth/LoginScene';
import {login} from '../actions/login';
import {connect} from 'react-redux/native';
import {getUser,saveUser} from './../utils/storage';

const Actions = require('react-native-router-flux').Actions;

class Login extends Component {

  componentWillMount() {
    //return getUser((user)=> {
    //  if (user != null) {
    //    return Actions.tabBar();
    //  }
    //});
  }

  handleLogin = (credentials) => {
    const {dispatch} = this.props;
    dispatch(login(credentials, (cb)=> {
      if (cb.success) {
        saveUser(cb.user);
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

  onChange(value) {
    const { dispatch } = this.props

    if (value.email != '') {
      dispatch(onAuthFormFieldChange('email', value.email));
    }
    if (value.password != '') {
      dispatch(onAuthFormFieldChange('password', value.password));
    }

    this.setState(
      {value}
    );

  }

  render() {

    const { login } = this.props

    if (login.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <LoginScene
        onLoginPressed={this.handleLogin}
        onRegisterRouteClick={this.handleRegisterRoute}
        onForgotPasswordRouteClick={this.handleForgotPasswordRoute}
        form={login}
        onChange={()=>alert('wa')}
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