'use strict';

import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View, ListView,ScrollView,TextInput,Dimensions,DeviceEventEmitter } from 'react-native';
import CommentList from './../components/CommentList'

import {assets} from '../utils/assets'
import { Icon } from 'react-native-icons'

export default class MediaComment extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      visibleHeight: Dimensions.get('window').height
    }
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  componentWillMount () {
    DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow.bind(this))
    DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide.bind(this))
  }

  keyboardWillShow (e) {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height
    this.setState({visibleHeight: newSize})
  }

  keyboardWillHide (e) {
    this.setState({visibleHeight: Dimensions.get('window').height})
  }

  handleCommentSubmit() {
    return this.props.onCommentSubmit(this.props.data, this.state.comment)
  }

  render() {
    const {comments} = this.props.data;

    return (
      <ScrollView
        contentContainerStyle={[styles.contentContainer,{height: this.state.visibleHeight}]}
        >
        <CommentList comments={comments} line={assets.line}/>

        <View style={styles.container}>

          <TextInput
            style={[styles.loginInput,styles.mTop20]}
            ref='email'
            placeholder="تعليق"
            placeholderTextColor={'#E2E2E2'}
            autoFocus={true}
            multiline={true}
            ref='commentBox'
            onChangeText={(comment) => this.setState({comment})}
            />

          <TouchableHighlight onPress={this.handleCommentSubmit}
                              style={styles.buttonGreen}>
            <Text style={styles.buttonText}>ارسل</Text>
          </TouchableHighlight>

        </View>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  contentContainer: {
    paddingBottom:64,
    paddingTop: 64,

  },
  container: {},
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
  },
  loginInput: {
    height: 50,
    padding: 5,
    margin: 10,
    fontSize: 18,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    borderBottomColor: '#48BBEC',
    borderRadius: 0,
    backgroundColor: 'white',
    color: '#5BC3BE',
    textAlign: 'right',
    writingDirection: 'rtl'
  },
  mTop20: {
    marginTop: 20
  },
  buttonGreen: {
    height: 40,
    backgroundColor: '#5BC3BE',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10
  },
  buttonText: {
    color: '#fff',
  },

});
