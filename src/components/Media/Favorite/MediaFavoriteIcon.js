'use strict';

import React, { Component, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Icon } from 'react-native-icons';

export default class MediaFavoriteIcon extends Component {

  render() {
    return (
      <View style={{flex:1, flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <TouchableHighlight onPress={() => this.props.onFavoriteCountPress()} underlayColor="transparent">
          <Text style={styles.count}>20</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.onFavoriteIconPress()} underlayColor="transparent">
          <Icon
            name='ion|android-star-outline'
            size={22}
            color={ this.props.hasFavorited ? 'red' :'gray'}
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
    fontSize:12,
    color:'gray',
    alignSelf:'center'
  }
});
