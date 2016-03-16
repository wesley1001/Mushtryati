import React, { Component, PropTypes } from 'react';
import { View, ScrollView  } from 'react-native';
import { connect } from 'react-redux';
import { fetchUser } from './../actions/user';
import { setCurrentMedia } from './../actions/Media/media';
import { Icon } from 'react-native-icons';
import UserScene from './../components/Auth/UserScene';
import LoadingIndicator from './../components/LoadingIndicator';
import MediaList from './../components/Media/MediaList';
const Actions = require('react-native-router-flux').Actions;

class User extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchUser());
  }

  loadMedia(media) {
    this.props.dispatch(setCurrentMedia(media.id));
    Actions.mediaScene({
      title:media.caption
    });
  }

  render() {

    const {userReducer,user, medias} = this.props;

    if (userReducer.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <ScrollView style={{paddingTop:64}} contentInset={{bottom:49}}>

        <UserScene user={user}/>

        {user ? <MediaList medias={medias} loadMedia={this.loadMedia.bind(this)}  contentInset={{top:1}}/> : <View/> }

      </ScrollView>
    );

  }
}

function mapStateToProps(state,ownProps) {
  const { userReducer,entities } = state;
  const user = entities.users[userReducer.current];
  const medias = user.medias ? user.medias.map((mediaID) => entities.medias[mediaID]) : [];
  return {
    userReducer,
    user,
    medias
  }
}

export default connect(mapStateToProps)(User)
