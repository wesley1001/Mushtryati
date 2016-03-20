import React, { Component, PropTypes } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { login, onLoginFormFieldChange } from './../../actions/Auth/login';
import LoginScene from './../../components/Auth/LoginScene';
const Actions = require('react-native-router-flux').Actions;

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      credentials: { email : this.props.login.form.fields.email, password : this.props.login.form.fields.password }
    };
  }

  componentDidMount() {
    this.setState({
      credentials : {email : 'admin@test.com',password:'password'}
    });
  }

  handleLogin() {
    const {dispatch} = this.props;
    const credentials = this.state.credentials;

    dispatch(login(credentials))
      .then((success)=> {
        if(success) {
          return Actions.home();
        } else {
          alert('Wrong Credentials, Try again');
        }
      })
      .catch(()=>{alert('network error')});
  }

  handleRegisterRoute() {
    Actions.register();
  }

  handleForgotPasswordRoute() {
    // @todo: implement route
    Actions.home();
  }

  onFieldChange(value, field) {
    let changedField = field[0];
    const { dispatch } = this.props;
    //dispatch(onLoginFormFieldChange(changedField, value[changedField]));
    this.setState({credentials: value});
  }

  render() {
    const { login } = this.props;
    return (
      <ScrollView style={{paddingTop: 64}}>
        <LoginScene
          login={login}
          credentials={this.state.credentials}
          onLoginPress={this.handleLogin.bind(this)}
          onRegisterRoutePress={this.handleRegisterRoute.bind(this)}
          onForgotPasswordRoutePress={this.handleForgotPasswordRoute.bind(this)}
          onChange={this.onFieldChange.bind(this)}
        />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
    login : state.login
  }
}

export default connect(mapStateToProps)(Login);