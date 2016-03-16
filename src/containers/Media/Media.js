import React, { Component, PropTypes } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View, ListView, ScrollView, Modal } from 'react-native';
import { connect } from 'react-redux';
import { fetchFavorites, favoriteMedia } from './../../actions/Media/favorites';
import { fetchMedia, likeMedia } from './../../actions/Media/media';
import { setCurrentUser } from './../../actions/user';
import { Icon } from 'react-native-icons';
import MediaItem from './../../components/Media/MediaItem';
import MediaCommentIcon from './../../components/Media/Comment/MediaCommentIcon';
import MediaFavoriteIcon from './../../components/Media/Favorite/MediaFavoriteIcon';
import MediaLikeIcon from './../../components/Media/Like/MediaLikeIcon';
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

  handleCommentIconClick() {
    const {media} = this.props;
    Actions.mediaCommentsScene({
      data: media
    });
  }

  handleFavoriteCountPress() {
    const {media} = this.props;
    Actions.mediaFavoritesScene({
      data: media.entity
    });

  }

  handleFavoriteIconPress() {
    console.log('fav button pressed');
    const {dispatch,user,media} = this.props;

    user.id = 1; // for testing purpose only.. uncomment while in production

    const params = {
      user: user.id,
      media: media.entity.id
    };

    dispatch(favoriteMedia(params));
  }

  handleLikeIconPress() {
    console.log('fav button pressed');
    const {dispatch,user,media} = this.props;

    user.id = 1; // for testing purpose only.. uncomment while in production

    const params = {
      user: user.id,
      media: media.entity.id
    };

    dispatch(likeMedia(params));
  }

  loadUser(user) {
    this.props.dispatch(setCurrentUser(user.id));
    Actions.userEntityScene({
      title:user.name
    })
  }

  render() {
    const {mediaReducer,media,author,comments} = this.props;
    console.log('comments',comments);
    if (mediaReducer.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <ScrollView style={styles.container} contentInset={{bottom:40}} >

        <MediaAuthorInfo user={author} loadUser={this.loadUser.bind(this)}/>

        <View style={styles.buttonWrapper}>
          <MediaCommentIcon
            onCommentIconClick={() => this.handleCommentIconClick()}
          />
          <MediaFavoriteIcon
            onFavoriteIconPress={() => this.handleFavoriteIconPress()}
            onFavoriteCountPress={() => this.handleFavoriteCountPress()}
            loadUser={this.loadUser.bind(this)}
          />
          <MediaLikeIcon
            onLikeIconPress={() => this.handleLikeIconPress()}
            loadUser={this.loadUser.bind(this)}
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
  const { entities,mediaReducer } = state;
  const media = entities.medias[mediaReducer.current];
  const comments = media.comments ? media.comments.map((commentID) => Object.assign({},entities.comments[commentID],{user:entities.users[entities.comments[commentID].user]})) : [];
  return {
    mediaReducer,
    media,
    author: entities.users[media.user],
    comments: comments,
  }
}

export default connect(mapStateToProps)(Media)
