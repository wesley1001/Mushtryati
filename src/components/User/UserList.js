import React, { PropTypes, Component } from 'react';
import{ View, Text, TouchableHighlight, StyleSheet, ListView, Image } from 'react-native';
import { Icon } from 'react-native-icons';

export default class UserList extends Component {

  renderRow(user) {
    return (
      <View>
        <View style={styles.cellContainer}>
          <View style={styles.cellWrapper}>
            <TouchableHighlight onPress={() => this.props.loadUser(user)} underlayColor="transparent">
              <View style={{flexDirection:'row'}}>
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
          </View>
          <View style={styles.followWrapper}>

            <TouchableHighlight onPress={() => this.props.followUser(user)} underlayColor="transparent">
              <Icon
                name='ion|person-add'
                size={24}
                color={'gray'}
                style={styles.followIcon}
                />
            </TouchableHighlight>
          </View>
        </View>
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
    margin:5
  },
  cellContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop:5,
    marginBottom:5
  },
  cellWrapper: {
    flex:5,
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
  },
  followWrapper: {
    flex:1,
    justifyContent:'flex-end'
  },
  followIcon: {
    height:20,
    width:20,

  }

})
