'use strict'
import React, { Component, StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';

export default class UserScene extends Component {

  render() {

    const {user} = this.props;

    return (

      <View>
        <Text>Welcome, {user.name} </Text>
      </View>
    )
  }

}

var styles = StyleSheet.create({

})
