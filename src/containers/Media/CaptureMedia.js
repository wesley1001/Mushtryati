import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
const Actions = require('react-native-router-flux').Actions;
import CaptureMediaScene from './../../components/Media/CaptureMediaScene';

class CaptureMedia extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      cameraType:'back',
      cameraMode:'still',
      isRecording:false,
      hasCaptured:false,
      mediaUri:null
    });

    this.switchCameraType = this.switchCameraType.bind(this);
    this.switchCameraMode = this.switchCameraMode.bind(this);
    this.startRecording = this.startRecording.bind(this);
    this.pauseRecording = this.pauseRecording.bind(this);
    this.saveMedia = this.saveMedia.bind(this);
  }

  switchCameraType = () => {
    return this.setState({
      cameraType: this.state.cameraType == 'back' ? 'front' : 'back'
    })
  }

  switchCameraMode = () => {
    this.setState({
      cameraMode: this.state.cameraMode == 'still' ? 'video' : 'still'
    });
  }

  startRecording = () => {
    this.setState({
      isRecording: true
    });
  }

  pauseRecording = () => {
    this.setState({
      isRecording: false
    });
  }

  saveMedia = (media) => {
    this.setState({
      hasCaptured:true,
      mediaUri: media
    });
    //return this.displayMedia(media);
  }

  switchCameraMode() {
    console.log('shifting camera mode');
  }

  switchCameraType() {
    console.log('shifting camera type');
  }

  displayMedia(media) {
    return Actions.displayMedia({
      data:media
    });
  }

  render() {
    return (
      <CaptureMediaScene
        cameraMode={this.state.cameraMode}
        cameraType={this.state.cameraType}
        isRecording={this.state.isRecording}
        hasCaptured={this.state.hasCaptured}
        mediaUri={this.state.mediaUri}
        switchCameraType={this.switchCameraType.bind(this)}
        switchCameraMode={this.switchCameraMode.bind(this)}
        onCapture={this.saveMedia.bind(this)}
        startRecording={this.startRecording.bind(this)}
        pauseRecording={this.pauseRecording.bind(this)}
      />
    );

  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(CaptureMedia)
