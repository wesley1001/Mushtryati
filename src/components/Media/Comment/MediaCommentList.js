import React, { Component, PropTypes } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View, ListView, ScrollView } from 'react-native';

export default class MediaCommentList extends Component {

  static propTypes = {
    comments: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(comment) {
    return (
      <View style={styles.cellContainer}>
        <View style={styles.cellWrapper}>
          <View style={styles.imageContainer}>
            {comment.user.image ? <Image style={styles.image} source={{uri:comment.user.image}}/> : <View/>}
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {comment.user.name}
            </Text>
            <Text style={styles.comment}>
              {comment.comment}
            </Text>
          </View>
        </View>
      </View>
    )
  }

  render() {
    const {comments} = this.props;

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    let dataSource = comments ? ds.cloneWithRows(comments) : ds.cloneWithRows([]);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderRow.bind(this)}
        automaticallyAdjustContentInsets={false}
        style={styles.container}
      />
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
    flexDirection:'column'
  },
  title: {
    fontSize: 15,
    textAlign: 'left',
    color: '#DA552F',
  },
  comment: {
    fontSize:13
  },
  separator: {
    height:0.5,
    backgroundColor:'#E8E8E8'
  }

});
