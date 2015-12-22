'use strict'
import React, { Component } from 'react-native';
import LoadingIndicator from './../components/LoadingIndicator';
import LoginScene from './../components/Auth/LoginScene';
import {login,onLoginFormFieldChange} from '../actions/login';
import {connect} from 'react-redux/native';
import {getUser,saveUser} from './../utils/storage';

const Actions = require('react-native-router-flux').Actions;

class Login extends Component {


  constructor(props) {
    super(props);

    this.state = {
      value: {
        email: this.props.login.form.fields.email,
        password: this.props.login.form.fields.password,
      }
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      value: {
        email: props.login.form.fields.email,
        password: props.login.form.fields.password,
      }
    });
  }

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
    //alert(JSON.stringify(value));

    const { dispatch } = this.props

    if (value.email != '') {
      dispatch(onLoginFormFieldChange('email', value.email));
    }

    if (value.password != '') {
      dispatch(onLoginFormFieldChange('password', value.password));
    }

    this.setState(
      {value}
    );
  }

  render() {

    const { login } = this.props;

    return (
      <LoginScene
        onLoginPressed={this.handleLogin}
        onRegisterRouteClick={this.handleRegisterRoute}
        onForgotPasswordRouteClick={this.handleForgotPasswordRoute}
        login={login}
        onChange={this.onChange.bind(this)}
        value={this.state.value}
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