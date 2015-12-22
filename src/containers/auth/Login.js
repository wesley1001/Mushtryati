'use strict'
import React, { Component } from 'react-native';
import LoadingIndicator from './../../components/LoadingIndicator';
import LoginScene from './../../components/Auth/LoginScene';
import {login,onLoginFormFieldChange} from '../../actions/Auth/login';
import {connect} from '../../../node_modules/react-redux/native';
import {getUser,saveUser} from './../../utils/storage';

const Actions = require('react-native-router-flux').Actions;

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        email: this.props.login.form.fields.email,
        password: this.props.login.form.fields.password,
      }
    };

    this.onFieldChange = this.onFieldChange.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      credentials: {
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

  handleLogin = () => {
    const {dispatch} = this.props;
    const credentials = this.state.credentials;
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

  onFieldChange(value, field) {

    let changedField = field[0];

    const { dispatch } = this.props

    dispatch(onLoginFormFieldChange(changedField, value[changedField]));

    this.setState({credentials: value});
  }

  render() {

    const { login } = this.props;

    return (
      <LoginScene
        onLoginPressed={this.handleLogin}
        onRegisterRouteClick={this.handleRegisterRoute}
        onForgotPasswordRouteClick={this.handleForgotPasswordRoute}
        login={login}
        onChange={this.onFieldChange.bind(this)}
        credentials={this.state.credentials}
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