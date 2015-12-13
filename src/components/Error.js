'use strict'
import React from 'react-native'

const {
  Text,
  View,
  Component,
  } = React

export default class Error extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {errors} = this.props;
    const error = (e) => { <Text> e </Text> };
    return (
      <View>
        <Text> Error </Text>
        {errors.map((e)=> {
          error(e)
        })}
      </View>
    )
  }
}