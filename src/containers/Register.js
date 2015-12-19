'use strict';
import React, { Component, StyleSheet, Text, View,  TouchableHighlight, TextInput, Image,ActivityIndicatorIOS } from 'react-native';
import {register} from '../actions/register';
import { connect } from 'react-redux/native';
import RegisterScene from './../components/Auth/RegisterScene';
import LoadingIndicator from './../components/LoadingIndicator';

const Actions = require('react-native-router-flux').Actions;

class Register extends Component {

  handleRegister = (inputs) => {
    dispatch(register(inputs, (cb)=> {
      if (cb.success) {
        Actions.login();
      }
    }));
  }

  handleLoginRoute = () => {
    return Actions.login();
  }

  render() {
    const { register } = this.props;

    if (register.processingRequest) {
      return <LoadingIndicator />;
    }
    return (
      <RegisterScene
        onRegisterSubmit={this.handleRegister}
        onLoginRouteClick={this.handleLoginRoute}
        />
    );
  }

}

function mapStateToProps(state) {
  const { register } = state;
  return {
    ...state,
    register
  }
}

export default connect(mapStateToProps)(Register)
