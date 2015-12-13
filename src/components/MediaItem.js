'use strict';

import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View, ListView,ScrollView } from 'react-native';

import CommentList from './../components/CommentList'

import {assets} from '../utils/assets'

export default class MediaItem extends Component {

  render() {
    const {id,caption,url,comments,user} = this.props.routerData;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{flexDirection: "row",  paddingBottom:10}}>
            <Text style={styles.createdAt}>2h</Text>
            <Text style={styles.name}>{user.name}</Text>
            <Image style={[styles.thumbnail]} source={{uri:user.thumbnail.name}}/>
          </View>
          <View>
            <Image style={styles.img} source={{uri:url}}/>
          </View>
          <View style={{flex:1,flexDirection:'row',justifyContent:"space-around"}}>
            <View style={{paddingTop:10,paddingBottom:10}}>
              <Image style={[styles.commentImg]} source={assets.comment}/>
            </View>
            <View style={{ paddingTop:10,paddingBottom:10}}>
              <Image style={[styles.favoriteImg]} source={assets.favorites}/>
            </View>
          </View>
        </View>
        <CommentList comments={comments} line={assets.line}/>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  img: {
    height: 200,
    borderRadius: 5,
    paddingTop: 10
  },
  commentImg: {
    width: 24,
    height: 22,
    color: "#5BC3BE",
  },
  favoriteImg: {
    width: 24,
    height: 22,
    color: "#5BC3BE",
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
    textAlign:'right',
    paddingRight:3
  },
  createdAt: {
    flex: 1,
    fontWeight: '200',
    color: '#888888',
    fontSize: 12,
    alignSelf:'center'
  }

});
