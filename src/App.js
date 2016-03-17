import React, { Component } from 'react';
import { StatusBar, Navigator } from 'react-native';
import { connect } from 'react-redux';
import { loginUserByToken } from './actions/Auth/login';
import { Scenes } from './Scenes';
import { Router } from 'react-native-router-flux';

class App extends Component {

  componentDidMount() {
    StatusBar.setBarStyle('light-content');
    const {dispatch} = this.props;
    dispatch(loginUserByToken()).then((success)=>{
      if(success) {
        //dispatch(fetchFavorites());
      }
    });
  }

  render() {
    return (
      <Router scenes={Scenes}/>
    );

  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App);
