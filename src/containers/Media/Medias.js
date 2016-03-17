import React, { Component, PropTypes } from 'react';
import { Image, Text, TouchableHighlight, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchMedias } from './../../actions/Media/medias';
import { setCurrentMedia } from './../../actions/Media/media';
import MediaList from './../../components/Media/MediaList';
import LoadingIndicator from './../../components/LoadingIndicator';
import AddMediaNavbar from './../../components/Media/AddMediaNavbar';

const Actions = require('react-native-router-flux').Actions;

class Medias extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchMedias());
  }

  loadMedia(media) {
    this.props.dispatch(setCurrentMedia(media.id));
    Actions.mediaScene({
      title:media.caption
    });
  }

  createMedia() {
    if(!this.props.userReducer.isAuthenticated) {
      return Actions.loginDialog({dialogText:'Please Login to view and manage your Favorites'});
    }
    return Actions.captureMedia();
  }

  render() {

    const { medias,mediasReducer } = this.props;

    if (mediasReducer.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <ScrollView contentInset={{bottom:40}}>
        <AddMediaNavbar createMedia={this.createMedia.bind(this)} />
        <MediaList medias={medias} loadMedia={this.loadMedia.bind(this)}/>
      </ScrollView>
    );

  }
}

function mapStateToProps(state) {
  const {entities,mediasReducer,userReducer } = state;
  return {
    medias:entities.medias ? entities.medias : [],
    mediasReducer,
    userReducer
  }
}

export default connect(mapStateToProps)(Medias)
