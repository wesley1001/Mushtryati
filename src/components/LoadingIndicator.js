import React, { Component,StyleSheet,ActivityIndicatorIOS,View} from 'react-native'

export default class LoadingIndicator extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center',backgroundColor:'#E9E9E9'}}>
        <ActivityIndicatorIOS size="large" animating={true}/>
      </View>
    );
  }
}