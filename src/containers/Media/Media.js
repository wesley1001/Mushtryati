import React, { Component, PropTypes } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View, ListView, ScrollView, Modal } from 'react-native';
import { connect } from 'react-redux';
import { fetchFavorites, favoriteMedia } from './../../actions/Media/favorites';
import { fetchDownloads, downloadMedia } from './../../actions/Media/downloads';
import { fetchMedia } from './../../actions/Media/media';
import { setCurrentUser } from './../../actions/User/user';
import MediaItem from './../../components/Media/MediaItem';
import MediaCommentIcon from './../../components/Media/Comment/MediaCommentIcon';
import MediaFavoriteIcon from './../../components/Media/Favorite/MediaFavoriteIcon';
import MediaDownloadIcon from './../../components/Media/Download/MediaDownloadIcon';
import MediaCommentList from './../../components/Media/Comment/MediaCommentList';
import MediaAuthorInfo from './../../components/Media/MediaAuthorInfo';
import LoadingIndicator from './../../components/LoadingIndicator';
const Actions = require('react-native-router-flux').Actions;

class Media extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchMedia());
  }

  loadComments() {
    Actions.mediaCommentsScene();
  }

  loadFavorites() {
    Actions.mediaFavoritesScene();
  }

  loadDownloads() {
    Actions.mediaFavoritesScene();
  }

  favoriteMedia() {
    if(!this.props.userReducer.isAuthenticated) {
      return Actions.loginDialog({dialogText:'Please Login to view and manage your Favorites'});
    }
    this.props.dispatch(favoriteMedia());
  }

  downloadMedia() {
    if(!this.props.userReducer.isAuthenticated) {
      return Actions.loginDialog({dialogText:'Please Login to view and manage your Favorites'});
    }
    this.props.dispatch(downloadMedia());
  }

  loadUser(user) {
    this.props.dispatch(setCurrentUser(user.id));
    Actions.userEntityScene({
      title:user.name
    })
  }

  render() {

    const {mediaReducer,media,user,comments} = this.props;

    if (mediaReducer.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <ScrollView style={styles.container} contentInset={{bottom:40}} >
        <MediaAuthorInfo user={user} loadUser={this.loadUser.bind(this)}/>
        <View style={styles.buttonWrapper}>
          <MediaCommentIcon loadComments={() => this.loadComments()} />
          <MediaFavoriteIcon
            media={media}
            favoriteMedia={() => this.favoriteMedia()}
            loadFavorites={() => this.loadFavorites()}
          />
          <MediaDownloadIcon
            media={media}
            downloadMedia={() => this.downloadMedia()}
            loadDownloads={() => this.loadDownloads()}
          />
        </View>
        <MediaItem media={media} />
        <MediaCommentList comments={comments}/>
      </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 64,
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-around"
  }
});

function mapStateToProps(state) {
  const { entities,mediaReducer,userReducer } = state;
  const media = entities.medias[mediaReducer.current];
  const comments = media.comments ? media.comments.map((commentID) => Object.assign({},entities.comments[commentID],{user:entities.users[entities.comments[commentID].user]})) : [];

  return {
    mediaReducer,
    media,
    user: entities.users[media.user],
    comments: comments,
    userReducer
  }
}

export default connect(mapStateToProps)(Media);
