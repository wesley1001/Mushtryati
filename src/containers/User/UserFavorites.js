import React, { Component, PropTypes } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchUserFavorites } from './../../actions/User/favorites';
import { setCurrentMedia } from './../../actions/Media/media';
import MediaList from './../../components/Media/MediaList';
import LoadingIndicator from './../../components/LoadingIndicator';
const Actions = require('react-native-router-flux').Actions;
import merge from 'lodash/merge';

class UserFavorites extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchUserFavorites());
  }

  loadMedia(media) {
    this.props.dispatch(setCurrentMedia(media.id));
    Actions.mediaTab();

    Actions.mediaScene({
      title:media.caption
    });
  }

  render() {
    const { medias,userReducer } = this.props;
    return (
      <ScrollView contentInset={{bottom:40}} contentContainerStyle={{ paddingTop:64}}>
        { userReducer.favorites.isFetching ? <LoadingIndicator/> : <View/> }
        <MediaList medias={medias.filter((media) => !media.isDeleted)} loadMedia={this.loadMedia.bind(this)}/>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  const { entities,userReducer } = state;
  const user = entities.users[userReducer.authUserID];
  return {
    medias: user && user.favorites ? user.favorites.map((favoriteID) => entities.medias[favoriteID]) : [] ,
    userReducer
  }
}

export default connect(mapStateToProps)(UserFavorites)
