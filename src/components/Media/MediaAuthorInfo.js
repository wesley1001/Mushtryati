'use strict';

import React, { Component, View, Text,  StyleSheet,Image } from 'react-native';

export default class MediaAuthorInfo extends Component {

  render() {
    const {user} = this.props;
    return (
      <View style={{flexDirection: "row", paddingBottom:10, paddingTop:10, padding:5}}>
        <Text style={styles.createdAt}>2h</Text>
        <Text style={styles.name}>{user.name}</Text>
        <Image style={[styles.thumbnail]} source={{uri:"http://mushtryati.app/images/test.png"}}/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {},
  img: {
    height: 200,
    borderRadius: 5,
    paddingTop: 10
  },
  thumbnail: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  name: {
    color: '#888888',
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    textAlign: 'right',
    paddingRight: 3
  },
  createdAt: {
    flex: 1,
    fontWeight: '200',
    color: '#888888',
    fontSize: 12,
    alignSelf: 'center'
  }

});
