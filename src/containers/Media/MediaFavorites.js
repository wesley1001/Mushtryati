'use strict';

import React, { Component, ScrollView, Text, StyleSheet, View } from 'react-native';
import {connect} from '../../../node_modules/react-redux/native';
import MediaFavoriteList from './../../components/Media/Favorite/MediaFavoriteList';
import { assets }  from '../../utils/assets';
import { Icon } from 'react-native-icons';
import {fetchFavorites} from './../../actions/Media/favorites';
import LoadingIndicator from './../../components/LoadingIndicator';

class MediaFavorites extends Component {

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchFavorites(this.props.data.id));
  }

  render() {

    const {media} = this.props;

    if (media.favorites.isFetching) {
      return <LoadingIndicator />;
    }
    return (
      <ScrollView contentContainerStyle={[styles.contentContainer]}>
        <MediaFavoriteList users={media.favorites.users}/>
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
  const { media } = state

  return {
    ...state,
    media
  }
}

export default connect(mapStateToProps)(MediaFavorites)
