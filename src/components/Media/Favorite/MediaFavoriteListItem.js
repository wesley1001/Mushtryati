'use strict';

import React, { Component, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Icon } from 'react-native-icons';

export default class MediaFavoriteList extends Component {

  render() {
    return (
      <TouchableHighlight >
        <View style={styles.container}>
          <Image source={{uri: this.state.imageLink}}
                 style={styles.image} />
          <View style={styles.postDetailsContainer}>
            <Text style={styles.postTitle}>
              {this.state.postName}
            </Text>
            <Text style={styles.postDetailsLine}>
              {this.state.tagLine}
            </Text>
          </View>
          <View style={styles.votesContainer}>
            <Icon name='chevron-up' size={30} color="#DA552F" style={styles.icon}/>
            <Text style={styles.votes}>
              {this.state.numVotes}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFD',
  },
  votesContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFD',
    marginRight: 15
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 25,
    marginTop: 10,
    alignSelf: 'center',
    marginRight: 15,
    marginLeft: 15
  },
  icon: {
    alignSelf: 'center'
  },
  votes: {
    textAlign: 'center',
    fontSize: 15
  },
  postCount: {
    fontSize: 20,
    textAlign: 'right',
    margin: 10,
    color: 'gray',
    marginLeft: 15,
  },
  postDetailsContainer:{
    flex: 1,
  },
  postTitle: {
    fontSize: 15,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 4,
    marginRight: 10,
    color: '#DA552F'
  },
  postDetailsLine: {
    fontSize: 12,
    marginBottom: 10,
    color: 'gray',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#CCCCCC',
  }
})

