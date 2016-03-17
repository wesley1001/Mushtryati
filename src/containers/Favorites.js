import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import {connect} from 'react-redux';
import MediaList from './../components/Favorites/MediaList';
import LoadingIndicator from './../components/LoadingIndicator';
import { fetchFavorites } from './../actions/favorites';
const Actions = require('react-native-router-flux').Actions;

class Favorites extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {dispatch,user} = this.props;
    user.id = 1; // @todo..  remove this in prod
    dispatch(fetchFavorites(user.id));
  }

  loadMedia(media) {
    Actions.mediaEntityScene({
      data: media
    });
  }

  render() {

    const { favorites } = this.props;

    if (favorites.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <MediaList medias={favorites.collection} loadMedia={this.loadMedia}/>
    );

  }
}

function mapStateToProps(state) {
  const { favorites,user } = state;

  return {
    favorites,
    user
  }
}

export default connect(mapStateToProps)(Favorites)
