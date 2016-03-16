'use strict';

import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View, ListView} from 'react-native';

import { Icon } from 'react-native-icons';

export default class MediaItem extends Component {

  renderContent(media) {
    const {caption,url} = media;
    return (
      <View style={styles.container}>
        <View>
          {url ? <Image style={styles.img} source={{uri:url}}/> : <View/> }
        </View>

        <View>
          <Text style={{ padding:10, textAlign:"center" }}>{caption}</Text>
        </View>
      </View>
    )
  }

  render() {

    const {media} = this.props;

    if (media.id && media.id > 0) {
      return this.renderContent(media);
    }
    return <View/>;
  }

}

const styles = StyleSheet.create({

  container: {
    padding:5
  },
  img: {
    height: 200,
    borderRadius: 5,
    paddingTop: 10
  },
});
