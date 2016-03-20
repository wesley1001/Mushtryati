import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchMediaDownloads } from './../../actions/Media/downloads';
import { setCurrentUser } from './../../actions/User/user';
import UserList from './../../components/User/UserList';
import LoadingIndicator from './../../components/LoadingIndicator';
const Actions = require('react-native-router-flux').Actions;

class MediaDownloads extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //this.props.dispatch(fetchMediaDownloads());
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

    const {isFetching,users} = this.props;
    return (
      <ScrollView contentContainerStyle={{top:64}}>
        { isFetching && <LoadingIndicator /> }
        <UserList
          users={users}
          loadUser={this.loadUser.bind(this)}
          followUser={this.followUser.bind(this)}
        />
      </ScrollView>

    )
  }
}


function mapStateToProps(state) {
  const {entities,mediaReducer } = state;
  const media = entities.medias[mediaReducer.current];
  const mediaDownloads = media.downloads ? media.downloads.map((userID) => entities.users[userID]) : [];
  return {
    users:mediaDownloads,
    isFetching:mediaReducer.downloads.isFetching
  }
}
export default connect(mapStateToProps)(MediaFavorites)
