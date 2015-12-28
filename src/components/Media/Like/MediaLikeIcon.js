'use strict';

import React, { Component, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Icon } from 'react-native-icons';

export default class MediaLikeIcon extends Component {

  render() {
    return (
      <View style={{flex:1, flexDirection:'row',justifyContent:'center'}}>
        <Text style={{alignSelf:'center'}}>20</Text>
        <TouchableHighlight onPress={() => this.props.onLikeIconPress()} underlayColor="transparent">
          <Icon
            name='ion|android-favorite-outline'
            size={20}
            color={ this.props.hasLiked ? 'red' :'black'}
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
  }
});
