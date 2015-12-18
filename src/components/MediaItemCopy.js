'use strict';

import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View, ListView} from 'react-native';

import { Icon } from 'react-native-icons';

export default class MediaItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comment: 'asdasdasdasd'
    }
  }

  render() {
    const {id,caption,url,user} = this.props.media;
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "row",  paddingBottom:10}}>
          <Text style={styles.createdAt}>2h</Text>
          <Text style={styles.name}>{user.name}</Text>
          <Image style={[styles.thumbnail]} source={{uri:user.thumbnail.name}}/>
        </View>
        <View>
          <Image style={styles.img} source={{uri:url}}/>
        </View>

        <View>
          <Text style={{ padding:10, textAlign:"center" }}>{caption}</Text>
        </View>

        <View style={{flex:1,flexDirection:'row',justifyContent:"center",paddingTop:10}}>
          <Text style={{padding:5,alignSelf:'center'}}>100</Text>

          <TouchableHighlight onPress={() => this.props.onCommentIconClick(this.props.data)}
                              underlayColor="transparent">
            <Icon
              name='ion|chatbubble'
              size={24}
              color={'gray'}
              style={styles.commentImg}
              />
          </TouchableHighlight>

          <Text style={{padding:5,alignSelf:'center'}}>20</Text>
          <TouchableHighlight onPress={() => this.props.onFavoritePress(id)} underlayColor="transparent">
            <Icon
              name='ion|android-favorite-outline'
              size={24}
              color={ this.props.selected ? 'gray' :'red'}
              style={styles.favoriteImg}
              />
          </TouchableHighlight>

        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    paddingTop: 64,
  },
  img: {
    height: 200,
    borderRadius: 5,
    paddingTop: 10
  },
  commentImg: {
    width: 24,
    height: 22,
    marginRight: 50,
    alignSelf: "center",
  },
  favoriteImg: {
    width: 24,
    height: 22,
    alignSelf: "center"
  },
  thumbnail: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  name: {
    color: '#888888',
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    textAlign: 'right',
    paddingRight: 3
  },
  createdAt: {
    flex: 1,
    fontWeight: '200',
    color: '#888888',
    fontSize: 12,
    alignSelf: 'center'
  }

});
