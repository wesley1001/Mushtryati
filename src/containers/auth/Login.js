'use strict'
import React, { Component,View,Image } from 'react-native';
import LoadingIndicator from './../../components/LoadingIndicator';
import LoginScene from './../../components/Auth/LoginScene';
import {login,onLoginFormFieldChange} from '../../actions/Auth/login';
import {connect} from '../../../node_modules/react-redux/native';
import {getUser,saveUser} from './../../utils/storage';
import {assets} from './../../utils/assets';

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
  }

  componentWillMount() {
    //return getUser((user)=> {
    //  if (user != null) {
    //    return Actions.tabBar();
    //  }
    //});
  }

  handleLogin() {
    const {dispatch} = this.props;
    const credentials = this.state.credentials;
    dispatch(login(credentials, (cb)=> {
      if (cb.success) {
        saveUser(cb.user);
        return Actions.tabBar();
      }
    }));
  }

  handleRegisterRoute() {
    return Actions.register();
  }

  handleForgotPasswordRoute() {
    // @todo: implement route
    return Actions.tabBar();
  }

  onFieldChange(value, field) {

    let changedField = field[0];

    const { dispatch } = this.props;

    dispatch(onLoginFormFieldChange(changedField, value[changedField]));

    this.setState({credentials: value});
  }

  render() {

    const { login } = this.props;

    return (
      <View style={{flex: 1,padding: 10}}>

        <Image style={{  height: 100, marginTop: 80,  alignSelf: 'center'}} source={assets.mark}/>

        {login.isFetching ? <LoadingIndicator /> : <View />}

        <LoginScene
          login={login}
          credentials={this.state.credentials}
          onLoginPressed={this.handleLogin.bind(this)}
          onRegisterRoutePress={this.handleRegisterRoute.bind(this)}
          onForgotPasswordRoutePress={this.handleForgotPasswordRoute.bind(this)}
          onChange={this.onFieldChange.bind(this)}
          />


      </View>
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