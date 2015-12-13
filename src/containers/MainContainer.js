import React from 'react-native'
import {connect} from 'react-redux/native'

let {
  View,
  Component
} = React

import CategoryList from './CategoryList'

class MainContainer extends Component {
  render() {
    return (
      <CategoryList {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  const { auth,category } = state
  return {
    user: auth,
    categories:category
  }
}

export default connect(mapStateToProps)(MainContainer)
