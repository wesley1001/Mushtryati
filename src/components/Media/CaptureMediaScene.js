import React, {PropTypes,Component} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View, ListView,Dimensions,ScrollView,Modal } from 'react-native';
import { Icon } from 'react-native-icons';
import Camera from 'react-native-camera';

export default class CaptureMediaScene extends Component {

  captureMedia() {

    const { cameraMode, isRecording, startRecording, pauseRecording } = this.props;

    if(cameraMode == 'video') {
      if(isRecording) {
        pauseRecording();
        this.camera.stopCapture();
      } else {
        startRecording();
        this.camera.capture({
          mode:Camera.constants.CaptureMode.video
        })
      }
    } else {
      //this.camera.capture().then(data => {
      //  onCapture(data)
      //});
      this.camera.capture()
        .then((data) => this.props.onCapture(data))
        .catch(err => console.error(err));
    }

  }

  switchCameraMode() {
    return this.props.switchCameraMode();
  }

  switchCameraType() {
    return this.props.switchCameraType();
  }

  render() {
    const { cameraMode,cameraType,isRecording} = this.props;
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          target={Camera.constants.CaptureTarget.disk}
          mode={cameraMode == 'video' ? Camera.constants.CaptureMode.video : Camera.constants.CaptureMode.still }
          type={cameraType == 'front' ? Camera.constants.Type.front : Camera.constants.Type.back }
          defaultOnFocusComponent={false}
        />

        <View style={styles.buttonWrapper}>
          <View style={styles.rightCol}>
            <TouchableHighlight onPress={()=> this.switchCameraMode() } underlayColor="transparent">
              <Icon
                name={cameraMode == 'video' ? 'ion|ios-camera' : 'ion|videocamera'}
                size={30}
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
                color={ isRecording ?  'red' : 'white' }
                style={styles.cameraCaptureButton}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.rightCol}>
            <TouchableHighlight onPress={()=> this.switchCameraType() } underlayColor="transparent">
              <Icon
                name='ion|ios-reverse-camera-outline'
                name={cameraType == 'back' ? 'ion|ios-reverse-camera-outline' : 'ion|ios-reverse-camera'}
                size={30}
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
  cameraCaptureButton:{
    height:60,
    width:60,
  },
  videoCameraButton:{
    height:30,
    width:40,
  },
  cameraShiftButton:{
    height:30,
    width:40,
  }
});


CaptureMediaScene.propTypes = {
  cameraMode:PropTypes.string.isRequired,
  cameraType:PropTypes.string.isRequired,
  switchCameraType:PropTypes.func.isRequired,
  switchCameraMode:PropTypes.func.isRequired,
  onCapture:PropTypes.func.isRequired
}
