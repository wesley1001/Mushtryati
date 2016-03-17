import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import { connect } from '../../../node_modules/react-redux';
import { fetchFavorites } from './../../actions/Media/favorites';
import MediaFavoriteList from './../../components/Media/Favorite/MediaFavoriteList';
import LoadingIndicator from './../../components/LoadingIndicator';
const Actions = require('react-native-router-flux').Actions;

class MediaFavorites extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchFavorites(this.props.data.id));
  }

  loadUser(user) {
    Actions.userEntityScene({
      title:user.name,
      data:user
    })
  }

  followUser(user) {

  }

  render() {

    const {media} = this.props;

    if (media.favorites.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <ScrollView contentContainerStyle={[styles.contentContainer]}>
        <MediaFavoriteList users={media.favorites.users} loadUser={this.loadUser.bind(this)}
          followUser={this.followUser.bind(this)}
          />
      </ScrollView>

    )
  }
}

function mapStateToProps(state) {
  return {
    media:state.media
  }
}

export default connect(mapStateToProps)(MediaFavorites)
