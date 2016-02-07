'use strict';

import React, { Component, ScrollView, Text, StyleSheet, Dimensions, DeviceEventEmitter } from 'react-native';
import {connect} from '../../../node_modules/react-redux';

import MediaCommentList from './../../components/Media/Comment/MediaCommentList';
import MediaCommentAdd from './../../components/Media/Comment/MediaCommentAdd';

import { assets }  from '../../utils/assets';
import { Icon } from 'react-native-icons';
import { addComment, fetchComments } from './../../actions/Media/comments';
import LoadingIndicator from './../../components/LoadingIndicator';

class MediaComments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleHeight: Dimensions.get('window').height
    }
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  componentWillUnmount() {
  }

  componentWillMount() {
    const {dispatch,media} = this.props;
    dispatch(fetchComments(media.entity.id));
    DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow.bind(this));
    DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide.bind(this));
  }

  keyboardWillShow(e) {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height
    this.setState({visibleHeight: newSize})
  }

  keyboardWillHide(e) {
    this.setState({visibleHeight: Dimensions.get('window').height})
  }

  handleCommentSubmit(comment) {
    const {dispatch,user,media} = this.props;

    user.id = 1; // for test only

    const inputs = {
      media: media.entity.id,
      comment: comment,
      user: user.id
    }

    dispatch(addComment(inputs));
  }

  render() {

    const {comments,entities} = this.props;

    {console.log('comments',comments,null,2)}

    if (comments.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <ScrollView contentContainerStyle={[styles.contentContainer,{height: this.state.visibleHeight}]}>

        <MediaCommentList comments={entities.medias.id.comments} line={assets.line} contentInset={0}/>

        <MediaCommentAdd onCommentSubmit={this.handleCommentSubmit}/>

      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 64,
    paddingTop: 64,
    margin:5
  }
});

function mapStateToProps(state) {
  const { comments,user,media,entities } = state;

  return {
    ...state,
    comments,
    user,
    media,
    entities
  }
}

export default connect(mapStateToProps)(MediaComments)
