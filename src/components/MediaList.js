'use strict';

import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View, ListView } from 'react-native';

export default class MediaList extends Component {

  renderRow(media) {
    return (
      <View style={styles.row}>
        <TouchableHighlight onPress={() => this.props.loadMedia(media)} underlayColor="transparent">
          <Image style={styles.thumbnail} source={{uri:media.url}}/>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    const {medias} = this.props;
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    let dataSource = medias ? ds.cloneWithRows(medias) : ds.cloneWithRows([]);

    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={dataSource}
        renderRow={this.renderRow.bind(this)}
        contentInset={{bottom:49}}
        automaticallyAdjustContentInsets={false}
        />
    )

  }
}

var styles = StyleSheet.create({
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 3,
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  text: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
});
