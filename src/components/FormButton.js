import React,
{
  PropTypes,
  StyleSheet,
  View
} from 'react-native';

import Button from 'apsl-react-native-button';

var styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: '#FF3366',
    borderColor: '#FF3366'
  }
});

var FormButton = React.createClass({

  propTypes: {
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func,
    buttonText: PropTypes.string
  },

  render() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          isDisabled={this.props.isDisabled}
          onPress={this.props.onPress}
          >
          {this.props.buttonText}
        </Button>
      </View>
    );
  }
});

module.exports = FormButton;
