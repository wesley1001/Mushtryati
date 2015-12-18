'use strict';
import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import {connect} from 'react-redux/native';
import {fetchMedias} from './../actions/medias';
import MediaList from './../components/MediaList';
import LoadingIndicator from './../components/LoadingIndicator';
const Actions = require('react-native-router-flux').Actions;

class Medias extends Component {

  constructor(props) {
    super(props);
    this.loadMedia = this.loadMedia.bind(this);

  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchMedias());

    //let media = {
    //  "id": 1,
    //  "user_id": 40,
    //  "caption": "reiciendis",
    //  "type": "image",
    //  "url": "http://mushtryati.app/images/test.jpg",
    //  "created_at": "2015-12-12 12:01:34",
    //  "updated_at": "2015-12-12 12:01:34",
    //  "user": {
    //    "id": 40,
    //    "name": "Celestino Parisian",
    //    "email": "Wayne38@yahoo.com",
    //    "mobile": "+96597978803",
    //    "active": 1,
    //    "activation_code": null,
    //    "admin": 0,
    //    "created_at": "2015-12-12 12:01:32",
    //    "updated_at": "2015-12-12 12:01:32",
    //    "thumbnail": {
    //      "id": 40,
    //      "name": "http://mushtryati.app/images/test.jpg",
    //      "imageable_id": 40
    //    }
    //  },
    //  "comments": [
    //    {
    //      "id": 31,
    //      "user_id": 30,
    //      "media_id": 1,
    //      "comment": "Voluptates.",
    //      "created_at": "2015-12-12 12:01:36",
    //      "updated_at": "2015-12-12 12:01:36",
    //      "user": {
    //        "id": 30,
    //        "name": "Jeanette Collins",
    //        "email": "aRunte@gmail.com",
    //        "mobile": "+96597978803",
    //        "active": 1,
    //        "activation_code": null,
    //        "admin": 0,
    //        "created_at": "2015-12-12 12:01:32",
    //        "updated_at": "2015-12-12 12:01:32",
    //        "thumbnail": {
    //          "id": 30,
    //          "name": "http://mushtryati.app/images/test.jpg",
    //          "imageable_id": 30
    //        }
    //      }
    //    },
    //    {
    //      "id": 34,
    //      "user_id": 7,
    //      "media_id": 1,
    //      "comment": "Consequatur.",
    //      "created_at": "2015-12-12 12:01:36",
    //      "updated_at": "2015-12-12 12:01:36",
    //      "user": {
    //        "id": 7,
    //        "name": "Chauncey Raynor",
    //        "email": "Altenwerth.Dell@yahoo.com",
    //        "mobile": "+96597978803",
    //        "active": 1,
    //        "activation_code": null,
    //        "admin": 0,
    //        "created_at": "2015-12-12 12:01:32",
    //        "updated_at": "2015-12-12 12:01:32",
    //        "thumbnail": {
    //          "id": 7,
    //          "name": "http://mushtryati.app/images/test.jpg",
    //          "imageable_id": 7
    //        }
    //      }
    //    },
    //    {
    //      "id": 40,
    //      "user_id": 4,
    //      "media_id": 1,
    //      "comment": "Quia inventore.",
    //      "created_at": "2015-12-12 12:01:36",
    //      "updated_at": "2015-12-12 12:01:36",
    //      "user": {
    //        "id": 4,
    //        "name": "Elvie Hahn",
    //        "email": "Jeff03@Reichel.info",
    //        "mobile": "+96597978803",
    //        "active": 1,
    //        "activation_code": null,
    //        "admin": 0,
    //        "created_at": "2015-12-12 12:01:32",
    //        "updated_at": "2015-12-12 12:01:32",
    //        "thumbnail": {
    //          "id": 4,
    //          "name": "http://mushtryati.app/images/test.jpg",
    //          "imageable_id": 4
    //        }
    //      }
    //    },
    //    {
    //      "id": 51,
    //      "user_id": 1,
    //      "media_id": 1,
    //      "comment": "Veniam.",
    //      "created_at": "2015-12-12 12:01:36",
    //      "updated_at": "2015-12-12 12:01:36",
    //      "user": {
    //        "id": 1,
    //        "name": "Rae Windler",
    //        "email": "lKling@Champlin.com",
    //        "mobile": "+96597978803",
    //        "active": 1,
    //        "activation_code": null,
    //        "admin": 0,
    //        "created_at": "2015-12-12 12:01:32",
    //        "updated_at": "2015-12-12 12:01:32",
    //        "thumbnail": {
    //          "id": 1,
    //          "name": "http://mushtryati.app/images/test.jpg",
    //          "imageable_id": 1
    //        }
    //      }
    //    },
    //    {
    //      "id": 55,
    //      "user_id": 38,
    //      "media_id": 1,
    //      "comment": "Nemo.",
    //      "created_at": "2015-12-12 12:01:36",
    //      "u;pdated_at": "2015-12-12 12:01:36",
    //      "user": {
    //        "id": 38,
    //        "name": "Soledad Klocko",
    //        "email": "Jarred63@Rath.com",
    //        "mobile": "+96597978803",
    //        "active": 1,
    //        "activation_code": null,
    //        "admin": 0,
    //        "created_at": "2015-12-12 12:01:32",
    //        "updated_at": "2015-12-12 12:01:32",
    //        "thumbnail": {
    //          "id": 38,
    //          "name": "http://mushtryati.app/images/test.jpg",
    //          "imageable_id": 38
    //        }
    //      }
    //    },
    //    {
    //      "id": 72,
    //      "user_id": 11,
    //      "media_id": 1,
    //      "comment": "Fugit animi.",
    //      "created_at": "2015-12-12 12:01:36",
    //      "updated_at": "2015-12-12 12:01:36",
    //      "user": {
    //        "id": 11,
    //        "name": "Dr. Grant Zemlak",
    //        "email": "Kasandra.Grady@Zboncak.com",
    //        "mobile": "+96597978803",
    //        "active": 1,
    //        "activation_code": null,
    //        "admin": 0,
    //        "created_at": "2015-12-12 12:01:32",
    //        "updated_at": "2015-12-12 12:01:32",
    //        "thumbnail": {
    //          "id": 11,
    //          "name": "http://mushtryati.app/images/test.jpg",
    //          "imageable_id": 11
    //        }
    //      }
    //    }
    //  ]
    //}
    //Actions.mediaItemTab(media);
  }

  loadMedia(media) {
    Actions.mediaEntityTab({
      data: media,
      onFavoritePress: this.handleFavoritePress,
      onCommentIconClick: this.handleCommentIconClick
    });
  }

  render() {

    const {  medias } = this.props;

    if (medias.processingRequest) {
      return <LoadingIndicator />;
    }

    return (
      <MediaList medias={medias.collection} loadMedia={this.loadMedia}/>
    );

  }
}

function mapStateToProps(state) {
  const { medias } = state
  return {
    ...state,
    medias: medias,
  }
}

export default connect(mapStateToProps)(Medias)
