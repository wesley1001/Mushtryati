import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
const Actions = require('react-native-router-flux').Actions;
import CaptureMediaScene from './../../components/Media/CaptureMediaScene';

class CaptureMedia extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      cameraType:'back',
      cameraMode:'still'
    });

    this.shiftCameraType = this.shiftCameraType.bind(this);
    this.shiftCameraMode = this.shiftCameraMode.bind(this);
  }

  shiftCameraType() {
    return this.setState({
      cameraType: this.state.cameraType == 'back' ? 'front' : 'back'
    })
  }

  shiftCameraMode() {
    return this.setState({
      cameraMode: this.state.cameraMode == 'still' ? 'video' : 'still'
    })
  }

  captureMedia(media) {
    console.log('saveed media');
    this.displayMedia(media);
  }

  shiftCameraMode() {
    console.log('shifting camera mode');
  }

  shiftCameraType() {
    console.log('shifting camera type');
  }

  displayMedia(data) {
    return Actions.displayMedia({
      data
    });
  }

  render() {
    return (
      <CaptureMediaScene
        cameraMode={this.state.cameraMode}
        cameraType={this.state.cameraType}
        shiftCameraType={()=>this.shiftCameraType.bind(this)}
        shiftCameraMode={()=>this.shiftCameraMode.bind(this)}
        onCapture={this.captureMedia.bind(this)}
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
