'use strict'
import React,{AsyncStorage} from 'react-native'
import {API_URL,CATEGORYLIST_STORAGE_KEY} from './../utils/config.js'

import { fetchTopCategoriesIfNeeded,clearCategories } from '../actions/category'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';

const {
  Text,
  View,
  Component,
  ListView,
  ActivityIndicatorIOS,
  TouchableHighlight
  } = React

export default class Detail extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {dispatch,actions} = this.props
    dispatch(fetchTopCategoriesIfNeeded())
  }

  pressRow(category) {
    const {dispatch} = this.props

    dispatch(clearCategories());
    //console.log(this.props.navigator.getCurrentRoutes())
    //this.props.navigator.push(Router.getCategoryRoute(category))
  }

  renderRow(category) {
    return (
      <TouchableHighlight
        onPress={()=> this.pressRow(category)}
        underlayColor='#ddd'
        >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 20,
            alignItems: 'center',
            borderColor: '#D7D7D7',
            borderBottomWidth: 1,
            backgroundColor: '#fff'
          }}>


          <View style={{ paddingLeft: 20 }}>
            <Text>
              <Text style={{ fontWeight: '600', justifyContent:'center', alignItems:'center' }}>{category.name}</Text>
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const {categories} = this.props;
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    let dataSource = categories.data ? ds.cloneWithRows(categories.data) : ds.cloneWithRows([]);

    if(categories.isFetching) {
      return (
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
          <ActivityIndicatorIOS size="large" animating={true}/>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <ListView
            dataSource={dataSource}
            renderRow={this.renderRow.bind(this)}
            automaticallyAdjustContentInsets={false}
            />
        </View>
      )
    }

  }
}

function mapStateToProps(state) {
  const { auth,category } = state
  return {
    user: auth,
    categories:category
  }
}

export default connect(mapStateToProps)(Detail)

const styles = React.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
