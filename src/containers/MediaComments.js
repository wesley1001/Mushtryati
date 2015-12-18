'use strict';

import React, { Component, ScrollView, Text, StyleSheet, Dimensions, DeviceEventEmitter } from 'react-native';
import {connect} from 'react-redux/native';

import CommentList from './../components/Comment/CommentList';
import CommentAdd from './../components/Comment/CommentAdd';

import { assets }  from '../utils/assets';
import { Icon } from 'react-native-icons';
import { addComment, fetchComments } from './../actions/comments';

class MediaComments extends Component {

  constructor(props) {
    super(props);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.state = {
      visibleHeight: Dimensions.get('window').height
    }
  }

  componentWillMount() {
    const {dispatch,media} = this.props;
    DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow.bind(this));
    DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide.bind(this));

    dispatch(fetchComments(media.entity.id))
  }

  keyboardWillShow(e) {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height
    this.setState({visibleHeight: newSize})
  }

  keyboardWillHide(e) {
    this.setState({visibleHeight: Dimensions.get('window').height})
  }

  handleCommentSubmit(comment) {
    alert(comment);
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

    const {comments} = this.props;

    return (
      <ScrollView contentContainerStyle={[styles.contentContainer,{height: this.state.visibleHeight}]} >

        <CommentList comments={comments.collection} line={assets.line} contentInset={0}/>

        <CommentAdd onCommentSubmit={this.handleCommentSubmit}/>

      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 64,
    paddingTop: 64,
  }
});

function mapStateToProps(state) {
  const { comments,user,media } = state

  return {
    ...state,
    comments,
    user,
    media
  }
}

export default connect(mapStateToProps)(MediaComments)
