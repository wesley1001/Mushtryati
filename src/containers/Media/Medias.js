import React, { Component, PropTypes } from 'react';
import { Image, Text, TouchableHighlight, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchMedias } from './../../actions/Media/medias';
import { setCurrent } from './../../actions/Media/media';
import MediaList from './../../components/Media/MediaList';
import LoadingIndicator from './../../components/LoadingIndicator';

const Actions = require('react-native-router-flux').Actions;

class Medias extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    const {dispatch} = this.props;
    dispatch(fetchMedias());
  }

  loadMedia(media) {
    this.props.dispatch(setCurrent(media.id));
    Actions.mediaScene({
      title:media.caption
    });
  }

  postMedia() {
    return Actions.captureMedia();
  }

  render() {

    const { medias,mediasReducer } = this.props;

    if (mediasReducer.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <ScrollView contentInset={{bottom:40}}>
        <View style={{ height:64, backgroundColor:'#343459', justifyContent:'flex-end',alignItems:'center',paddingLeft:10,paddingRight:10, paddingBottom:5}}>
          <Text style={{ alignSelf:'flex-end', color:'white',fontSize:30,fontWeight:'700' }} onPress={ () => this.postMedia()} > + </Text>
        </View>
        <MediaList medias={medias} loadMedia={this.loadMedia.bind(this)}/>
      </ScrollView>
    );

  }
}

function mapStateToProps(state) {
  const {entities,mediasReducer } = state;
  return {
    medias:entities.medias ? entities.medias : [],
    mediasReducer
  }
}

export default connect(mapStateToProps)(Medias)
