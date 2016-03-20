import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import { connect } from '../../../node_modules/react-redux';
import { fetchMediaFavorites } from './../../actions/Media/favorites';
import { setCurrentUser } from './../../actions/User/user';
import MediaFavoriteList from './../../components/Media/Favorite/MediaFavoriteList';
import LoadingIndicator from './../../components/LoadingIndicator';
const Actions = require('react-native-router-flux').Actions;

class MediaFavorites extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchMediaFavorites());
  }

  loadUser(user) {
    this.props.dispatch(setCurrentUser(user.id));
    Actions.userScene({
      title:user.name
    });
  }

  followUser(user) {

  }

  render() {

    const {isFetching} = this.props;
    return (
      <ScrollView contentContainerStyle={{top:64}}>
        { isFetching && <LoadingIndicator /> }
        <MediaFavoriteList users={media.favorites.users} loadUser={this.loadUser.bind(this)}
          followUser={this.followUser.bind(this)}
          />
      </ScrollView>

    )
  }
}


function mapStateToProps(state) {
  const {entities,mediasReducer,userReducer } = state;
  const user = entities.users[userReducer.authUserID];
  return {
    medias:user ? user.favorites ? entities.users[userReducer.authUserID].favorites.map((favoriteID) => entities.medias[favoriteID]) : [] : [],
    mediasReducer,
    isFetching:mediaReducer.favorites.isFetching
  }
}
export default connect(mapStateToProps)(MediaFavorites)
