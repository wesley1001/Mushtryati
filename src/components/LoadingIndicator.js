import React, { Component,Text,View } from 'react-native'

export default class LoadingIndicator extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{ color:'black' }}>loading..</Text>
      </View>
    );
  }
}