'use strict'
import React, { Component, StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';

export default class UserScene extends Component {

  render() {

    const {user} = this.props;

alert(JSON.stringify(user));
    return (

      <View>
        <Text>Welcome </Text>
      </View>
    )
  }

}

var styles = StyleSheet.create({
  container:{flex:1}
});
