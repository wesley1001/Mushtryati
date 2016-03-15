'use strict';
import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View,ScrollView,Dimensions,Stylesheet } from 'react-native';
import {connect} from 'react-redux';
import {fetchMedias} from './../actions/medias';
import MediaList from './../components/Media/MediaList';
import LoadingIndicator from './../components/LoadingIndicator';

const Actions = require('react-native-router-flux').Actions;

class Medias extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    const {dispatch} = this.props;
    //dispatch(fetchMedias());
  }

  loadMedia(media) {
    Actions.mediaEntityScene({
      title:media.caption,
      data: media
    });
  }

  postMedia() {
    return Actions.captureMedia();
  }

  render() {

    const {  global,entities } = this.props;

    if (global.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <ScrollView contentInset={{bottom:40}}>
        <View style={{ height:64, backgroundColor:'#343459', justifyContent:'flex-end',alignItems:'center',paddingLeft:10,paddingRight:10, paddingBottom:5}}>
          <Text style={{ alignSelf:'flex-end', color:'white',fontSize:30,fontWeight:'700' }} onPress={ () => this.postMedia()} > + </Text>
        </View>
        <MediaList medias={entities.medias} loadMedia={this.loadMedia.bind(this)}/>
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
