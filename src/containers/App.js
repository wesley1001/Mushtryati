'use strict'

import React, { Component, StyleSheet,Navigator,Text,View,Image} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux/native'
import {assets} from '../utils/assets'

var {Router, Route, Schema, Animations, TabBar} = require('react-native-router-flux');

import Detail from '../components/Detail'
import Media from '../containers/Media'
import Master from '../components/Master'
import SignIn from '../components/SignIn'
import Register from '../components/Register'
import MediaItem from '../components/MediaItem'
//
//export const defaultSchema = {
//  navBar: NavBar,
//  navLeftColor: '#FFFFFF',
//  navTint: '#5BC3BE',
//  navTitleColor: '#FFFFFF',
//  navTitleStyle: {
//    fontFamily: 'Avenir Next',
//    fontSize: 18,
//  },
//  statusStyle: 'light-content',
//  tabBar: TabBar,
//}
//

class TabIcon extends Component {
  render() {
    return (
      <View>
        <Image style={{width:30,height:30}} source={this.props.tabIcon}/>
        <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
      </View>
    );
  }

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
      <Router hideNavBar={true}>
        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Schema name="withoutAnimation"/>
        <Schema name="tab" type="switch" icon={TabIcon}/>

        <Route name="login" component={SignIn} assets={assets} initial={true} wrapRouter={true} title="Login"
               hideNavBar={false}/>
        <Route name="register" component={Register} title="Register" schema="default" hideNavBar={false} />
        <Route name="home" component={Media} title="Replace" type="replace"/>

        <Route name="register2" component={Register} title="Register2" schema="withoutAnimation"/>
        <Route name="tabbar">
          <Router footer={TabBar} showNavigationBar={true}>
            <Route name="tab1" schema="tab" tabIcon={assets.home} title="Tab #1">
              <Router>
                <Route name="tab1_1" component={Master} title="Tab #1_1"/>
                <Route name="tab1_2" component={Master} title="Tab #1_2"/>
              </Router>
            </Route>
            <Route name="tab2" schema="tab" title="Tab #2" tabIcon={assets.suitcase} hideTabBar={true}
                   component={Media}/>
            <Route name="tab3" schema="tab" title="Tab #3" tabIcon={assets.favorites} component={Master}/>
            <Route name="tab4" schema="tab" title="Tab #4" tabIcon={assets.settings} component={Master}/>
          </Router>
        </Route>
      </Router>

      //<Router {...this.props} assets={assets} initial={this.state.initialRoute}>
      //
      //  <Schema name="default" {...defaultSchema} />
      //
      //  <Route name="signIn" component={SignIn} type="reset" hideNavBar={true}/>
      //  <Route name="register" component={Register} type="reset" title="تسجيل الدخول"/>
      //  <Route name="detail" component={Detail}/>
      //  <Route name="media" component={Media} title="مشترياتي"/>
      //  <Route name="mediaItem" component={MediaItem}/>
      //
      //  <TabRoute name="tabBar" barTint='#FFFFFF' tint="#32DEAF">
      //    <Route name="tab4" component={Master('#111')}
      //           title="الاعدادات"
      //           tabItem={{icon: assets.settings, title: 'الاعدادات'}}
      //      />
      //    <Route name="tab3" component={Master('#222')}
      //           title="مفضلات"
      //           tabItem={{icon: assets.favorites, title: 'مفضلات'}}
      //      />
      //    <Route name="tab2" component={Media}
      //           title="مشترياتي"
      //           tabItem={{icon: assets.purchases, title: 'مشترياتي'}}
      //           navRightTitle="اضافة"
      //      />
      //    <Route name="tab1" component={Master('#444')}
      //           title="الرئيسية"
      //           tabItem={{icon: assets.home, title: 'الرئيسية'}}
      //      />
      //  </TabRoute>
      //
      //</Router>


    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Application)
