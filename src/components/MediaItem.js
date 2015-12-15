'use strict';

import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View, ListView,ScrollView } from 'react-native';

import CommentList from './../components/CommentList'

import {assets} from '../utils/assets'
import { Icon } from 'react-native-icons';

export default class MediaItem extends Component {

  constructor(props) {
    super(props);

    this.state= {
      comment: 'asdasdasdasd'
    }
  }

  render() {
    const {id,caption,url,comments,user} = this.props.data;
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

          <View>
            <Text style={{ padding:10, textAlign:"center" }}>{caption}</Text>
          </View>

          <View style={{flex:1,flexDirection:'row',justifyContent:"center",paddingTop:10}}>
            <Text style={{padding:5}}>100</Text>

            <TouchableHighlight onPress={() => this.props.onCommentSubmit(id,this.state.comment)} underlayColor="transparent">
              <Icon
                name='fontawesome|comment'
                size={20}
                color={'gray'}
                style={styles.commentImg}
                />
            </TouchableHighlight>

            <Text style={{padding:5}}>20</Text>
            <TouchableHighlight onPress={() => this.props.onFavoritePress(id)} underlayColor="transparent">
              <Icon
                name='fontawesome|heart'
                size={20}
                color={ this.props.selected ? 'gray' :'red'}
                style={styles.favoriteImg}
                />
            </TouchableHighlight>

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
    paddingTop: 64,
},
  img: {
    height: 200,
    borderRadius: 5,
    paddingTop: 10
  },
  commentImg: {
    width: 20,
    height: 20,
    padding: 5,
    marginRight: 50,
    alignSelf: "center"
  },
  favoriteImg: {
    width: 20,
    height: 20,
    padding: 5,
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
