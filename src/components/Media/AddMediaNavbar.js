import React, { Component, PropTypes} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class AddMediaNavbar extends Component {

  static propTypes = {
    createMedia:PropTypes.func.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.addButton} onPress={ () => this.props.createMedia()} > + </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container :{
    height:64,
    backgroundColor:'#343459',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  addButton:{
    alignSelf:'flex-end',
    color:'white',
    fontSize:30,
    fontWeight:'700'
  }
});
