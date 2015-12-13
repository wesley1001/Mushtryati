'use strict'

import React, { Component, StyleSheet} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux/native'
import {assets} from '../utils/assets'


import Detail from '../components/Detail'
import Master from '../components/Master'
import Media from '../containers/Media'
import SignIn from '../components/SignIn'
import Register from '../components/Register'
import MediaItem from '../components/MediaItem'

export const defaultSchema = {
  navBar: NavBar,
  navLeftColor: '#FFFFFF',
  navTint: '#5BC3BE',
  navTitleColor: '#FFFFFF',
  navTitleStyle: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
  },
  statusStyle: 'light-content',
  tabBar: TabBar,
}

class Application extends Component {

  constructor(props) {
    super(props)
    this.state = {
      initialRoute: "signIn"
    }
  }

  render() {
    return (
      <Router {...this.props} assets={assets} initial={this.state.initialRoute}>

        <Schema name="default" {...defaultSchema} />

        <Route name="signIn" component={SignIn} type="reset" hideNavBar={true}/>
        <Route name="register" component={Register} type="reset" title="تسجيل الدخول"/>
        <Route name="detail" component={Detail}/>
        <Route name="media" component={Media} title="مشترياتي"/>
        <Route name="mediaItem" component={MediaItem}/>

        <TabRoute name="tabBar" barTint='#FFFFFF' tint="#32DEAF">
          <Route name="tab4" component={Master('#111')}
                 title="الاعدادات"
                 tabItem={{icon: assets.settings, title: 'الاعدادات'}}
            />
          <Route name="tab3" component={Master('#222')}
                 title="مفضلات"
                 tabItem={{icon: assets.favorites, title: 'مفضلات'}}
            />
          <Route name="tab2" component={Media}
                 title="مشترياتي"
                 tabItem={{icon: assets.purchases, title: 'مشترياتي'}}
                 navRightTitle="اضافة"
            />
          <Route name="tab1" component={Master('#444')}
                 title="الرئيسية"
                 tabItem={{icon: assets.home, title: 'الرئيسية'}}
            />
        </TabRoute>

      </Router>
    )
  }
}

const mapStateToProps = state => ({
  router: state.router,
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...routerActions,
  }, dispatch),
  dispatch,
})


export default connect(mapStateToProps, mapDispatchToProps)(Application)
