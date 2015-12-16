'use strict'
import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import {connect} from 'react-redux/native'
import {fetchMedias,selectMedia,favoriteMedia,commentMedia} from './../actions/media'
import MediaList from './../components/MediaList'
import MediaItem from './../components/MediaItem'
var Actions = require('react-native-router-flux').Actions;

class Media extends Component {

  constructor(props) {
    super(props);
    this.loadMedia = this.loadMedia.bind(this);
    this.handleFavoritePress = this.handleFavoritePress.bind(this);
    this.handleCommentIconClick = this.handleCommentIconClick.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchMedias());

    let media = {
      "id": 1,
      "user_id": 40,
      "caption": "reiciendis",
      "type": "image",
      "url": "http://mushtryati.app/images/test.jpg",
      "created_at": "2015-12-12 12:01:34",
      "updated_at": "2015-12-12 12:01:34",
      "user": {
        "id": 40,
        "name": "Celestino Parisian",
        "email": "Wayne38@yahoo.com",
        "mobile": "+96597978803",
        "active": 1,
        "activation_code": null,
        "admin": 0,
        "created_at": "2015-12-12 12:01:32",
        "updated_at": "2015-12-12 12:01:32",
        "thumbnail": {
          "id": 40,
          "name": "http://mushtryati.app/images/test.jpg",
          "imageable_id": 40
        }
      },
      "comments": [
        {
          "id": 31,
          "user_id": 30,
          "media_id": 1,
          "comment": "Voluptates.",
          "created_at": "2015-12-12 12:01:36",
          "updated_at": "2015-12-12 12:01:36",
          "user": {
            "id": 30,
            "name": "Jeanette Collins",
            "email": "aRunte@gmail.com",
            "mobile": "+96597978803",
            "active": 1,
            "activation_code": null,
            "admin": 0,
            "created_at": "2015-12-12 12:01:32",
            "updated_at": "2015-12-12 12:01:32",
            "thumbnail": {
              "id": 30,
              "name": "http://mushtryati.app/images/test.jpg",
              "imageable_id": 30
            }
          }
        },
        {
          "id": 34,
          "user_id": 7,
          "media_id": 1,
          "comment": "Consequatur.",
          "created_at": "2015-12-12 12:01:36",
          "updated_at": "2015-12-12 12:01:36",
          "user": {
            "id": 7,
            "name": "Chauncey Raynor",
            "email": "Altenwerth.Dell@yahoo.com",
            "mobile": "+96597978803",
            "active": 1,
            "activation_code": null,
            "admin": 0,
            "created_at": "2015-12-12 12:01:32",
            "updated_at": "2015-12-12 12:01:32",
            "thumbnail": {
              "id": 7,
              "name": "http://mushtryati.app/images/test.jpg",
              "imageable_id": 7
            }
          }
        },
        {
          "id": 40,
          "user_id": 4,
          "media_id": 1,
          "comment": "Quia inventore.",
          "created_at": "2015-12-12 12:01:36",
          "updated_at": "2015-12-12 12:01:36",
          "user": {
            "id": 4,
            "name": "Elvie Hahn",
            "email": "Jeff03@Reichel.info",
            "mobile": "+96597978803",
            "active": 1,
            "activation_code": null,
            "admin": 0,
            "created_at": "2015-12-12 12:01:32",
            "updated_at": "2015-12-12 12:01:32",
            "thumbnail": {
              "id": 4,
              "name": "http://mushtryati.app/images/test.jpg",
              "imageable_id": 4
            }
          }
        },
        {
          "id": 51,
          "user_id": 1,
          "media_id": 1,
          "comment": "Veniam.",
          "created_at": "2015-12-12 12:01:36",
          "updated_at": "2015-12-12 12:01:36",
          "user": {
            "id": 1,
            "name": "Rae Windler",
            "email": "lKling@Champlin.com",
            "mobile": "+96597978803",
            "active": 1,
            "activation_code": null,
            "admin": 0,
            "created_at": "2015-12-12 12:01:32",
            "updated_at": "2015-12-12 12:01:32",
            "thumbnail": {
              "id": 1,
              "name": "http://mushtryati.app/images/test.jpg",
              "imageable_id": 1
            }
          }
        },
        {
          "id": 55,
          "user_id": 38,
          "media_id": 1,
          "comment": "Nemo.",
          "created_at": "2015-12-12 12:01:36",
          "u;pdated_at": "2015-12-12 12:01:36",
          "user": {
            "id": 38,
            "name": "Soledad Klocko",
            "email": "Jarred63@Rath.com",
            "mobile": "+96597978803",
            "active": 1,
            "activation_code": null,
            "admin": 0,
            "created_at": "2015-12-12 12:01:32",
            "updated_at": "2015-12-12 12:01:32",
            "thumbnail": {
              "id": 38,
              "name": "http://mushtryati.app/images/test.jpg",
              "imageable_id": 38
            }
          }
        },
        {
          "id": 72,
          "user_id": 11,
          "media_id": 1,
          "comment": "Fugit animi.",
          "created_at": "2015-12-12 12:01:36",
          "updated_at": "2015-12-12 12:01:36",
          "user": {
            "id": 11,
            "name": "Dr. Grant Zemlak",
            "email": "Kasandra.Grady@Zboncak.com",
            "mobile": "+96597978803",
            "active": 1,
            "activation_code": null,
            "admin": 0,
            "created_at": "2015-12-12 12:01:32",
            "updated_at": "2015-12-12 12:01:32",
            "thumbnail": {
              "id": 11,
              "name": "http://mushtryati.app/images/test.jpg",
              "imageable_id": 11
            }
          }
        }
      ]
    }
    //Actions.mediaItemTab(media);
  }


  handleFavoritePress = (media) => {
    const {dispatch} = this.props;
    dispatch(favoriteMedia(media));
  }

  handleCommentSubmit = (media, comment) => {
    const {dispatch} = this.props;
    const params = {
      media: media.id,
      comment: comment,
    }
    dispatch(commentMedia(params));
  }

  handleCommentIconClick = (media) => {
    Actions.mediaCommentTab({
      data: media,
      onCommentSubmit: this.handleCommentSubmit})
  }

  loadMedia(media) {
    const {dispatch,medias} = this.props;
    dispatch(selectMedia(media));
    Actions.mediaItemTab({
      data: media,
      onFavoritePress: this.handleFavoritePress,
      onCommentIconClick: this.handleCommentIconClick
    });
  }

  render() {
    const {  medias } = this.props
    return (

      <MediaList medias={medias} loadMedia={this.loadMedia}/>
    )
  }
}

function mapStateToProps(state) {
  const { auth,medias } = state
  return {
    ...state,
    auth,
    medias: medias.data,
  }
}

export default connect(mapStateToProps)(Media)
