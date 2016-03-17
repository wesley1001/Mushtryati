import React, { Component, PropTypes } from 'react';
import { ScrollView,View, Text, StyleSheet, Dimensions, DeviceEventEmitter } from 'react-native';
import { connect } from '../../../node_modules/react-redux';
import { assets }  from '../../utils/assets';
import { Icon } from 'react-native-icons';
import { commentMedia, fetchComments } from './../../actions/Media/comments';
import MediaCommentList from './../../components/Media/Comment/MediaCommentList';
import MediaCommentAdd from './../../components/Media/Comment/MediaCommentAdd';
import LoadingIndicator from './../../components/LoadingIndicator';

class MediaComments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleHeight: Dimensions.get('window').height
    }
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  componentWillMount() {
    DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow.bind(this));
    DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide.bind(this));
    const {dispatch} = this.props;
    dispatch(fetchComments());
  }

  keyboardWillShow(e) {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height;
    this.setState({visibleHeight: newSize})
  }

  keyboardWillHide(e) {
    this.setState({visibleHeight: Dimensions.get('window').height})
  }

  commentMedia(comment) {
    if(!this.props.userReducer.isAuthenticated) {
      return Actions.loginDialog({dialogText:'Please Login to view and manage your Favorites'});
    }
    const {dispatch} = this.props;
    dispatch(commentMedia(comment)).then(()=>{
      this.refs.scrollView.scrollTo({x: 0})
    });
  }

  render() {
    const {comments} = this.props;
    return (
      <ScrollView contentContainerStyle={[styles.contentContainer,{height: this.state.visibleHeight}]} ref="scrollView">
        {comments.size ? <MediaCommentList comments={comments} line={assets.line} /> : <View/> }
        <MediaCommentAdd commentMedia={this.commentMedia()}/>
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
  const { entities,mediaReducer,userReducer } = state;
  const media = entities.medias[mediaReducer.current];
  const comments = media.comments ? media.comments.map((commentID) => Object.assign({},entities.comments[commentID],{user:entities.users[entities.comments[commentID].user]})) : [];
  return {
    comments,
    userReducer
  }
}

export default connect(mapStateToProps)(MediaComments)
