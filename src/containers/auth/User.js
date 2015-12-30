'use strict';

import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View, ListView,ScrollView,Modal } from 'react-native';
import {connect} from '../../../node_modules/react-redux/native';
import {fetchUser} from './../../actions/Auth/user';
import UserScene from './../../components/Auth/UserScene';
import LoadingIndicator from './../../components/LoadingIndicator';
import MediaList from './../../components/Media/MediaList';
import { Icon } from 'react-native-icons';
const Actions = require('react-native-router-flux').Actions;

class User extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchUser());
    // dispatch(fetchUser(this.props.data.id));
  }

  loadMedia(media) {
    Actions.mediaEntityScene({
      data: media
    });
  }

  render() {

    const {user} = this.props;

    if (user.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} contentInset={{bottom:49}}>

        <UserScene user={user.entity}/>

        {user.entity != null ?   <MediaList medias={user.entity.medias} loadMedia={this.loadMedia.bind(this)}  contentInset={{top:1}}/> : <View/>}

      </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:64,
  },
  contentContainer:{
  }
});

function mapStateToProps(state) {
  const { user } = state
  return {
    ...state,
    user: user,
  }
}

export default connect(mapStateToProps)(User)
