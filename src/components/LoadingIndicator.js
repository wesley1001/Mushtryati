import React, { PropTypes, Component } from 'react';
import { StyleSheet, ActivityIndicatorIOS, View } from 'react-native';

export default class LoadingIndicator extends Component {
  render() {
    return (
      <View style={[styles.container,this.props.style]}>
        <ActivityIndicatorIOS size="large" animating={true}/>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});