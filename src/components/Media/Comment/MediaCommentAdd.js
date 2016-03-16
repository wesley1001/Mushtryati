'use strict';

import React, { Component, View, Text, TextInput, StyleSheet, TouchableHighlight} from 'react-native';

export default class MediaCommentAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    }
    this.submitComment = this.submitComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (comment) => {
    return this.setState({
      comment: comment
    })
  };

  submitComment() {
    this.props.onCommentSubmit(this.state.comment);
    this.setState({
      comment:''
    });
  }

  render() {
    return (
      <View>
        <TextInput
          style={[styles.loginInput,styles.mTop20]}
          placeholder="تعليق"
          placeholderTextColor={'#E2E2E2'}
          autoFocus={true}
          multiline={true}
          ref='commentbox'
          onChangeText={this.handleChange}
          />

        <TouchableHighlight onPress={this.submitComment} style={styles.buttonGreen} underlayColor="transparent">
          <Text style={styles.buttonText}>ارسل</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

var styles = StyleSheet.create({
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
    margin: 10
  },
  buttonText: {
    color: '#fff',
  },
});
