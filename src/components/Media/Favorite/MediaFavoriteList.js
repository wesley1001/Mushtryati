'use strict';

import React, { Component, View, Text, TouchableHighlight, StyleSheet , ListView,Image} from 'react-native';
import { Icon } from 'react-native-icons';

export default class MediaFavoriteList extends Component {

  renderRow(user) {
    return (

      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.onSelect} underlayColor='transparent'>

          <View style={{flexDirection:'row',flex:1}}>
            <View style={{flex:1}}>
              {user.thumbnail ? <Image style={styles.image} source={{uri:user.thumbnail.name}}/> : <View/>}
            </View>

            <View style={[styles.postDetailsContainer,{flex:2,justifyContent:'flex-start',alignSelf:'center'}]}>
              <Text style={styles.postTitle}>
                {user.name}
              </Text>
            </View>
            <View style={[styles.followContainer,{flex:1,justifyContent:'flex-start',alignSelf:'center'}]}>
              <Text style={styles.votes}>
                20
              </Text>
            </View>
          </View>

        </TouchableHighlight>

        <View style={{height:0.5,backgroundColor:'gray',marginLeft:10,marginTop:10}}/>

      </View>
    );
  }


  render() {
    const {users} = this.props;

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    let dataSource = users ? ds.cloneWithRows(users) : ds.cloneWithRows([]);

    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderRow.bind(this)}
        style={{backgroundColor: '#FFFFFD'}}/>
    )
  }

}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFD',
    marginTop: 5,
    marginBottom: 5,
  },
  followContainer: {
    backgroundColor: 'white',
    borderWidth: .5,
    borderColor: 'black',
    borderRadius: 2,
    margin: 5,
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 25,
    alignSelf: 'center',
  },
  icon: {
    alignSelf: 'center'
  },
  votes: {
    textAlign: 'center',
    fontSize: 15,
    color: 'gray',
  },
  postCount: {
    fontSize: 20,
    textAlign: 'right',
    margin: 10,
    color: 'gray',
    marginLeft: 15,
  },
  postDetailsContainer: {
    flex: 1,
  },
  postTitle: {
    fontSize: 15,
    textAlign: 'left',
    color: '#DA552F',
  },
  postDetailsLine: {
    fontSize: 12,
    marginBottom: 10,
    color: 'gray',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 48,
    height: 44,
    borderRadius: 24,
  },

})

