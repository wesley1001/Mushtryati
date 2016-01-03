'use strict';

import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View, ListView,ScrollView,Modal } from 'react-native';
import {connect} from '../../../node_modules/react-redux/native';
import {fetchFavorites,favoriteMedia} from './../../actions/Media/favorites';
import {fetchMedia,likeMedia} from './../../actions/Media/media';
import MediaItem from './../../components/Media/MediaItem';
import MediaCommentIcon from './../../components/Media/Comment/MediaCommentIcon';
import MediaFavoriteIcon from './../../components/Media/Favorite/MediaFavoriteIcon';
import MediaLikeIcon from './../../components/Media/Like/MediaLikeIcon';
import MediaCommentList from './../../components/Media/Comment/MediaCommentList';
import MediaAuthorInfo from './../../components/Media/MediaAuthorInfo';
import LoadingIndicator from './../../components/LoadingIndicator';
import { Icon } from 'react-native-icons';
const Actions = require('react-native-router-flux').Actions;

class Media extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {dispatch} = this.props;
     dispatch(fetchMedia(this.props.data.id));
    //dispatch(fetchMedia());
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
    //console.log('fav button pressed');
    const {dispatch,user,media} = this.props;

    user.id = 1; // for testing purpose only.. uncomment while in production

    const params = {
      user: user.id,
      media: media.entity.id
    };

    dispatch(favoriteMedia(params));
  }

  handleLikeIconPress() {
    //console.log('fav button pressed');
    const {dispatch,user,media} = this.props;

    user.id = 1; // for testing purpose only.. uncomment while in production

    const params = {
      user: user.id,
      media: media.entity.id
    };

    dispatch(likeMedia(params));
  }

  loadUser(user) {
    Actions.userEntityScene({
      title:user.name,
      data:user
    })
  }

  render() {

    const {media} = this.props;

    if (media.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <ScrollView style={styles.container} contentInset={{bottom:49}} >
        <MediaAuthorInfo user={media.entity.user} loadUser={this.loadUser.bind(this)}/>
        <View style={styles.buttonWrapper}>
          <MediaCommentIcon
            onCommentIconClick={() => this.handleCommentIconClick()}
            />
          <MediaFavoriteIcon
            hasFavorited={media.hasFavorited}
            onFavoriteIconPress={() => this.handleFavoriteIconPress()}
            onFavoriteCountPress={() => this.handleFavoriteCountPress()}
            loadUser={this.loadUser.bind(this)}
            />
          <MediaLikeIcon
            hasLiked={media.hasLiked}
            onLikeIconPress={() => this.handleLikeIconPress()}
            loadUser={this.loadUser.bind(this)}
            />
        </View>

        <MediaItem media={media.entity} />

        <MediaCommentList comments={media.comments}/>

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
  const { media } = state
  return {
    ...state,
    media: media,
  }
}

export default connect(mapStateToProps)(Media)
