'use strict';

import React, {PropTypes,Component} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View, ListView,Dimensions,ScrollView,Modal } from 'react-native';
import { Icon } from 'react-native-icons';
import Camera from 'react-native-camera';

export default class CaptureMediaScene extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('state change',((nextProps.cameraMode != this.props.cameraMode) || (nextProps.cameraType != this.props.cameraType)));
  }

  captureMedia() {
    console.log('capturing image');
    this.camera.capture()
      .then((media) => this.props.onCapture(media))
      .catch(err => console.error(err));

  }

  shiftCameraMode() {
    console.log('shifting camera mode');
    return this.props.shiftCameraMode();
  }

  shiftCameraType() {
    console.log('shifting camera type');
    return this.props.shiftCameraType();
  }

  render() {

    const { cameraMode,cameraType} = this.props;
    console.log(cameraMode);

    return (
      <View style={styles.container}>

        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.disk}
        />

        <View style={styles.buttonWrapper}>
          <View style={styles.rightCol}>
            <TouchableHighlight onPress={()=> this.shiftCameraMode() } underlayColor="transparent">
              <Icon
                name={cameraMode == 'still' ? 'ion|videocamera' : 'ion|ios-camera'}
                size={40}
                color={'white'}
                style={styles.videoCameraButton}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.middleCol}>
            <TouchableHighlight onPress={()=> this.captureMedia() } underlayColor="transparent">
              <Icon
                name='ion|ios-circle-filled'
                size={60}
                color={'white'}
                style={styles.cameraCaptureButton}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.rightCol}>
            <TouchableHighlight onPress={()=> this.shiftCameraType() } underlayColor="transparent">
              <Icon
                name='ion|ios-reverse-camera-outline'
                name={cameraType == 'back' ? 'ion|ios-reverse-camera' : 'ion|ios-reverse-camera-outline'}
                size={40}
                color={'white'}
                style={styles.cameraShiftButton}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>

    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:40
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  buttonWrapper:{
    flexDirection:'row',
    backgroundColor:"black",
    opacity:0.9,
    justifyContent:'space-around',
    alignItems:'center',
    padding:5
  },
  captureButtonWrapper:{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:'white',
    alignSelf:'center'
  },
  leftCol:{
  },
  middleCol:{
  },
  rightCol:{
  },
  capture: {
    color: 'black',
    alignSelf:'center'
  },
  cameraStyleWrapper: {
    alignSelf:'flex-end',
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:'white'
  },
  cameraCaptureButton:{
    height:60,
    width:60,
  },
  videoCameraButton:{
    height:60,
    width:60,
  },
  cameraShiftButton:{
    height:30,
    width:40,
  }
});


CaptureMediaScene.propTypes = {
  cameraMode:PropTypes.string.isRequired,
  cameraType:PropTypes.string.isRequired,
  shiftCameraType:PropTypes.func.isRequired,
  shiftCameraMode:PropTypes.func.isRequired,
  onCapture:PropTypes.func.isRequired
}
