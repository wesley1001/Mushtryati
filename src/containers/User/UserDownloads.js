import React, { Component, PropTypes } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchDownloads } from './../../actions/User/downloads';
import { setCurrentMedia } from './../../actions/Media/media';
import MediaList from './../../components/Media/MediaList';
import LoadingIndicator from './../../components/LoadingIndicator';
const Actions = require('react-native-router-flux').Actions;

class UserDownloads extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchDownloads());
  }

  loadMedia(media) {
    this.props.dispatch(setCurrentMedia(media.id));
    Actions.mediaTab();

    Actions.mediaScene({
      title:media.caption
    });

  }

  render() {
    const { medias,userReducer } = this.props;
    console.log('downloads',medias);

    return (
      <ScrollView contentInset={{bottom:40}} contentContainerstyle={{ paddingTop:64}}>
        { userReducer.downloads.isFetching && <LoadingIndicator/> }
        <MediaList medias={medias} loadMedia={this.loadMedia.bind(this)}/>
      </ScrollView>
    );

  }
}

function mapStateToProps(state) {
  const {entities,mediasReducer,userReducer } = state;
  const user = entities.users[userReducer.authUserID];
  return {
    medias:user ? user.downloads ? entities.users[userReducer.authUserID].downloads.map((downloadID) => entities.medias[downloadID]) : [] : [],
    mediasReducer,
    userReducer
  }
}

export default connect(mapStateToProps)(UserDownloads)
