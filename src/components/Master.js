'use strict';
import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import {connect} from 'react-redux';

export default class Master extends Component {

  render() {
    return (
      <View style={[styles.container]}>
        <Text style={styles.text}>Push detail view</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: '#000000',
  },
});
