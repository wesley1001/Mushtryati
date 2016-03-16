import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Icon } from 'react-native-icons';

export default class MediaFavoriteIcon extends Component {

  static propTypes = {
    loadFavorites:PropTypes.func.isRequired,
    favoriteMedia:PropTypes.func.isRequired
  };

  render() {
    const {media} = this.props;
    return (
      <View style={{flex:1, flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <TouchableHighlight onPress={() => this.props.loadFavorites()} underlayColor="transparent">
          <Text style={styles.count}>20</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.favoriteMedia()} underlayColor="transparent">
          <Icon
            name={media.isFavorited ? 'ion|android-favorite' : 'ion|android-favorite-outline'}
            size={22}
            color={'red'}
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
    height: 20,
    alignSelf:'center'
  },
  count: {
    fontSize:14,
    color:'gray',
    alignSelf:'center'
  }
});
