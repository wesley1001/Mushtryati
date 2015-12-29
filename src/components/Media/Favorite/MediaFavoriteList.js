'use strict';

import React, { Component, View, Text, TouchableHighlight, StyleSheet , ListView,Image} from 'react-native';
import { Icon } from 'react-native-icons';

export default class MediaFavoriteList extends Component {

  renderRow(user) {
    return (

      <View style={styles.cellContainer}>
        <TouchableHighlight onPress={this.props.onSelect} underlayColor='transparent'>

          <View style={styles.cellWrapper}>
            <View style={styles.imageContainer}>
              {user.thumbnail ? <Image style={styles.image} source={{uri:user.thumbnail.name}}/> : <View/>}
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                {user.name}
              </Text>
            </View>
          </View>

        </TouchableHighlight>

        <View style={styles.separator}/>

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
        style={styles.container}/>
    )
  }

}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFD',
    margin:10
  },
  cellContainer:{

  },
  cellWrapper: {
    flexDirection:'row',
    flex:1,
    justifyContent:'flex-start',
    marginTop:10,
    marginBottom:10
  },
  imageContainer: {
    flex:1,
  },
  image: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
  titleContainer: {
    flex:4,
    alignSelf:'center'
  },
  title: {
    fontSize: 15,
    textAlign: 'left',
    color: '#DA552F',
  },
  separator: {
    height:0.5,
    backgroundColor:'#E8E8E8'
  }

})
