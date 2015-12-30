'use strict'
import React, { Component, StyleSheet, Text, View, TouchableHighlight, TextInput,Image } from 'react-native';
import { Icon } from 'react-native-icons';
export default class UserScene extends Component {

  render() {

    // const {user} = this.props;
    let imageUrl = 'http://mushtryati.app/images/test.png';

    return (

      <View style={styles.container}>

        <View style={styles.imageWrapper}>
          <TouchableHighlight onPress={() => ''} underlayColor="transparent">
            <Image style={styles.image} source={{uri:imageUrl}} />
          </TouchableHighlight>
          <Text style={styles.username}>
            username
          </Text>
        </View>
        <View style={styles.infoColumnWrapper}>
          <View style={styles.infoWrapper}>
            <View>
              <Text style={styles.count}>200</Text>
              <Text style={styles.countInfo}>Followers</Text>
            </View>
            <View>
              <Text style={styles.count}>200</Text>
              <Text style={styles.countInfo}>Medias</Text>
            </View>
            <View>
              <Text style={styles.count}>200</Text>
              <Text style={styles.countInfo}>Followings</Text>
            </View>
          </View>
          <View style={styles.followingWrapperFollowing}>
            <Icon
              name='ion|android-done'
              size={18}
              color='white'
              style={styles.checked}
              />
            <Text style={styles.following}> Following</Text>
          </View>
        </View>
      </View>
    )
  }

}

var styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    paddingTop:10
  },
  imageWrapper:{
    flex:1,
    justifyContent:'center',
  },
  image:{
    height:60,
    width:60,
    borderRadius:30,
    alignSelf:'center'
  },
  username:{
    fontSize:15,
    color:'maroon',
    fontWeight:'400',
    textAlign:'center'
  },
  infoWrapper:{
    flexDirection:'row',
    justifyContent:'space-around',

  },
  count: {
    fontSize:13,
    alignSelf:'center',
  },
  countInfo: {
    fontSize:12,
    color:'gray'
  },
  infoColumnWrapper:{
    flex:2,
    flexDirection:'row',
    flexDirection:'column',
    alignSelf:'center'
  },
  followingWrapperFollow:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    backgroundColor:'white',
    borderColor:'gray',
    borderWidth:0.5,
    padding:5
  },
  followingWrapperFollowing:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    backgroundColor:'#63D85B',
    padding:5
  },

  mediaContainer:{
    flexDirection:'row'
  },
  mediaWrapper: {

  },
  follow:{
    color:'#5BC3BE'
  },
  following: {
    color:'white'
  },
  add :{
    color:'#5BC3BE',
    width:20,
    height:20,
  },
  checked: {
    color:'white',
    width:20,
    height:20
  }





});
