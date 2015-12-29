'use strict';

import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View, ListView,ScrollView,Modal } from 'react-native';
import {connect} from '../../../node_modules/react-redux/native';
import {fetchUser} from './../../actions/Auth/user';
import UserScene from './../../components/Auth/UserScene';
import LoadingIndicator from './../../components/LoadingIndicator';
import { Icon } from 'react-native-icons';
const Actions = require('react-native-router-flux').Actions;

class User extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {dispatch} = this.props;
    //dispatch(fetchMedia(this.props.data.id));
    dispatch(fetchUser(this.props.data.id));
  }

  render() {

    const {user} = this.props;

    if (user.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <ScrollView style={styles.container}>

        <UserScene user={user.entity} contentInset={0}/>

      </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 64,
  },
});

function mapStateToProps(state) {
  const { user } = state
  return {
    ...state,
    user: user,
  }
}

export default connect(mapStateToProps)(User)
