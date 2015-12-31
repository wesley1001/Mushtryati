'use strict';
import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View,ScrollView } from 'react-native';
import {connect} from 'react-redux/native';
import {fetchMedias} from './../actions/medias';
import MediaList from './../components/Media/MediaList';
import LoadingIndicator from './../components/LoadingIndicator';
const Actions = require('react-native-router-flux').Actions;

class Medias extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchMedias());
  }

  loadMedia(media) {
    Actions.mediaEntityScene({
      title:media.caption,
      data: media
    });
  }



  render() {

    const {  medias } = this.props;

    if (medias.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <ScrollView contentInset={{bottom:49}} contentContainerStyle={{paddingTop:64}}>
        <MediaList medias={medias.collection} loadMedia={this.loadMedia.bind(this)}/>
      </ScrollView>
    );

  }
}

function mapStateToProps(state) {
  const { medias } = state
  return {
    ...state,
    medias: medias,
  }
}

export default connect(mapStateToProps)(Medias)
