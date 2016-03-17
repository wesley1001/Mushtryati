import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Icon } from 'react-native-icons';

export default class MediaDownloadIcon extends Component {

  static propTypes = {
    loadDownloads:PropTypes.func.isRequired,
    downloadMedia:PropTypes.func.isRequired
  };

  render() {
    const {media} = this.props;
    return (
      <View style={{flex:1, flexDirection:'row',justifyContent:'center'}}>
        <TouchableHighlight onPress={() => this.props.loadDownloads()} underlayColor="transparent">
          <Text style={styles.count}>20</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.downloadMedia()} underlayColor="transparent">
          <Icon
            name={media.isDownloaded ? 'ion|android-star' : 'ion|android-star-outline'}
            size={22}
            color={'gold'}
            style={styles.favoriteImg}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  favoriteImg: {
    width: 20,
    height: 20
  },
  count: {
    fontSize:12,
    color:'gray',
    alignSelf:'center'
  }
});
