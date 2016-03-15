import React, {PropTypes,Component} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View, ListView,Dimensions,ScrollView,Modal,TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-icons';
import Camera from 'react-native-camera';
import Video from 'react-native-video';

export default class CaptureMediaScene extends Component {

  _captureMedia() {
    this.camera.capture()
      .then((data) => this.props.onCapture(data))
      .catch(err => console.error(err));
  }

  takePhoto() {
    this.camera.stopCapture();
    this._captureMedia();
  }

  startVideoRecording() {
    this.camera.stopCapture();
    this.props.startRecording();
    this._captureMedia();
  }

  pauseVideoRecording() {
    this.props.pauseRecording();
    this.camera.stopCapture();
  }

  switchCameraMode() {
    return this.props.switchCameraMode();
  }

  switchCameraType() {
    return this.props.switchCameraType();
  }

  retake() {
    return this.props.retake();
  }

  render() {
    const { cameraMode,cameraType,isRecording,hasCaptured,mediaUri} = this.props;
    if(hasCaptured) {
      return (
        <View style={styles.container}>
          {cameraMode == 'video' ?
            <Video source={{uri: mediaUri}}
                   style={styles.fullScreen}
                   repeat={true}
            />
            :
            <Image source={{uri:mediaUri,isStatic:true}} style={{ flex:1,width:null,height:null}} />
          }
          <View style={styles.closeButtonWrapper}>
            <TouchableHighlight underlayColor="transparent" onPress={() => this.retake()}>
              <Icon
                name='ion|close-round'
                size={20}
                color={'white'}
                style={styles.closeButton}
              />
            </TouchableHighlight>
          </View>
        </View>

      );

    } else {
      return (
        <View style={styles.container}>
          <Camera
            ref={(cam) => {
            this.camera = cam;
          }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            captureTarget={Camera.constants.CaptureTarget.disk}
            captureMode={cameraMode == 'video' ? Camera.constants.CaptureMode.video : Camera.constants.CaptureMode.still }
            type={cameraType == 'front' ? Camera.constants.Type.front : Camera.constants.Type.back }
          >
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
                { cameraMode == 'video' ?
                  <TouchableWithoutFeedback
                    onPressIn={()=> this.startVideoRecording()}
                    onPressOut={()=> this.pauseVideoRecording()}
                  >
                    <Icon
                      name='ion|ios-circle-filled'
                      size={60}
                      color='red'
                      style={styles.cameraCaptureButton}
                    />
                  </TouchableWithoutFeedback>
                  :
                  <TouchableHighlight onPress={()=> this.takePhoto() } underlayColor="transparent">
                    <Icon
                      name='ion|ios-circle-filled'
                      size={60}
                      color='white'
                      style={styles.cameraCaptureButton}
                    />
                  </TouchableHighlight>
                }
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

          </Camera>
        </View>

      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:40
  },
  preview: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  buttonWrapper:{
    flex:1,
    flexDirection:'row',
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
    alignSelf:'flex-start'
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
  },
  fullScreen: {
    flex:1,
    position: 'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
  },
  closeButtonWrapper:{
    position: 'absolute',
    top: 20,
    left: 0,
    padding:10
  },
  closeButton :{
    height:20,
    width:20,
  }
});

CaptureMediaScene.propTypes = {
  cameraMode:PropTypes.string.isRequired,
  cameraType:PropTypes.string.isRequired,
  switchCameraType:PropTypes.func.isRequired,
  switchCameraMode:PropTypes.func.isRequired,
  onCapture:PropTypes.func.isRequired
}
