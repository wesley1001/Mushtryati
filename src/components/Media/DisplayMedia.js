'use strict';

import React, { PropTypes, Component } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View, ListView,Dimensions,ScrollView,Modal } from 'react-native';
import {connect} from 'react-redux';
import { Icon } from 'react-native-icons';
const Actions = require('react-native-router-flux').Actions;
import Camera from 'react-native-camera';

class DisplayMedia extends Component {

  render() {
    console.log('media to display',this.props.data);
    return (
      <View style={{ flex:1 }}>
        <Image source={{uri:this.props.data,isStatic:true}} style={{ flex:1,width:null,height:null,padding:10}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

function mapStateToProps(state) {
  const { media } = state
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(DisplayMedia)
