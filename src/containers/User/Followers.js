import React, { Component, PropTypes } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchUserFollowers,fetchUserFollowings,fetchUserMedias } from './../../actions/User/user';
import { setCurrentMedia } from './../../actions/Media/media';
import MediaList from './../../components/Media/MediaList';
import UserList from './../../components/User/UserList';
import LoadingIndicator from './../../components/LoadingIndicator';
const Actions = require('react-native-router-flux').Actions;
import merge from 'lodash/merge';
import { setCurrentUser } from './../../actions/User/user';

class Followers extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchUserFollowers());
  }

  loadMedia(media) {
    this.props.dispatch(setCurrentMedia(media.id));
    Actions.mediaTab();

    Actions.mediaScene({
      title:media.caption
    });
  }

  loadUser(user) {
    this.props.dispatch(setCurrentUser(user.id));
    Actions.userScene({
      title:user.name
    });
  }

  followUser(user) {

  }

  render() {
    const { users,userReducer } = this.props;
    return (
      <ScrollView contentInset={{bottom:40}} contentContainerStyle={{ paddingTop:64}}>
        { userReducer.followers.isFetching ? <LoadingIndicator/> : <View/> }
        <UserList
          users={users.filter((user) => !user.unFollowed)}
          loadUser={this.loadUser.bind(this)}
          followUser={this.followUser.bind(this)}
        />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  const { entities,userReducer } = state;
  const user = entities.users[userReducer.current];

  return {
    userReducer,
    users: user && user.followers ? user.followers.map((userID) => entities.users[userID]) : []
  }
}

export default connect(mapStateToProps)(Followers)
