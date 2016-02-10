'use strict';
import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View,ScrollView } from 'react-native';

import {connect} from 'react-redux';
import {fetchMedias} from './../actions/medias';
import Master from './../components/Master';
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

    const {  global,entities } = this.props;

    if (global.isFetching) {
      return <LoadingIndicator />;
    }
    return (
        <ScrollView
          contentInset={{bottom:49}}
          contentContainerStyle={{paddingTop:64}}
          automaticallyAdjustContentInsets={false}
        >
          <Master medias={entities.medias} loadMedia={this.loadMedia.bind(this)}/>
        </ScrollView>
    );

  }
}

function mapStateToProps(state) {
  const {entities,global } = state
  return {
    ...state,
    global,
    entities
  }
}

export default connect(mapStateToProps)(Medias)
