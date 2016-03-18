import React, { Component, PropTypes } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchFavorites } from './../../actions/User/favorites';
import { setCurrentMedia } from './../../actions/Media/media';
import MediaList from './../../components/Media/MediaList';
import LoadingIndicator from './../../components/LoadingIndicator';
const Actions = require('react-native-router-flux').Actions;

class UserFavorites extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchFavorites());
  }

  loadMedia(media) {
    this.props.dispatch(setCurrentMedia(media.id));
    Actions.mediaScene({
      title:media.caption
    });
  }

  render() {
    const { medias,userReducer } = this.props;

    return (
      <ScrollView contentInset={{bottom:40,top:10}} style={{ paddingTop:64}}>
        { userReducer.favorites.isFetching ? <LoadingIndicator/> : <View/> }
        <MediaList medias={medias} loadMedia={this.loadMedia.bind(this)}/>
      </ScrollView>
    );

  }
}

function mapStateToProps(state) {
  const {entities,mediasReducer,userReducer } = state;
  const user = entities.users[userReducer.authUserID];
  return {
    medias:user ? user.favorites ? entities.users[userReducer.authUserID].favorites.map((favoriteID) => entities.medias[favoriteID]) : [] : [],
    mediasReducer,
    userReducer
  }
}

export default connect(mapStateToProps)(UserFavorites)
