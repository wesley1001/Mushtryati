'use strict';

import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View, ListView,ScrollView } from 'react-native';
import {connect} from 'react-redux/native';
import {fetchMedia} from './../actions/media';
import MediaItem from './../components/MediaItem';
import CommentList from './../components/CommentList';
import LoadingIndicator from './../components/LoadingIndicator';
import {assets} from '../utils/assets'
import { Icon } from 'react-native-icons';

class Media extends Component {

  constructor(props) {
    super(props);
    this.handleFavoritePress = this.handleFavoritePress.bind(this);
    this.handleCommentIconClick = this.handleCommentIconClick.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);

    this.state = {
      comment: 'this is comment'
    }
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchMedia(this.props.data.id));
  }

  handleFavoritePress = (media) => {
    const {dispatch} = this.props;
    dispatch(favoriteMedia(media));
  }

  handleCommentSubmit = (media, comment) => {
    const {dispatch} = this.props;
    const params = {
      media: media.id,
      comment: comment,
    }
    dispatch(commentMedia(params));
  }

  handleCommentIconClick = (media) => {
    Actions.mediaCommentTab({
      data: media,
      onCommentSubmit: this.handleCommentSubmit
    })
  }


  render() {

    //<MediaItem media={media.entity}/>
    //<CommentList comments={media.entity.comments} line={assets.line} contentInset={0}/>

    const {media} = this.props;

    if (media.processingRequest) {
      return <LoadingIndicator />;
    }

    return (
      <ScrollView>
        <MediaItem media={media.entity}/>
        <CommentList comments={media.comments} line={assets.line} contentInset={0}/>
      </ScrollView>
    );

  }
}

function mapStateToProps(state) {
  const { media } = state
  return {
    ...state,
    media: media,
  }
}

export default connect(mapStateToProps)(Media)
