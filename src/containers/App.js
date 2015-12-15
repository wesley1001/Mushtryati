'use strict'

import React, { Component, StyleSheet,Navigator,Text,View,Image} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux/native'
import {assets} from '../utils/assets'
var { Icon } = require('react-native-icons');

var {Router, Route, Schema, Animations, TabBar} = require('react-native-router-flux');

import Detail from '../components/Detail'
import Media from '../containers/Media'
import Master from '../components/Master'
import Master2 from '../components/Master2'
import Master3 from '../components/Master3'
import Master4 from '../components/Master4'
import SignIn from '../components/SignIn'
import Register from '../components/Register'
import MediaItem from '../components/MediaItem'

class TabIcon extends Component {
  render() {
    return (
      <View>
        <Icon
          name={this.props.tabIcon}
          size={25}
          color={ this.props.selected ? '#FFFFFF' :'#FFFFFF'}
          style={{width:25,height:25,alignSelf:'center'}}
          />
        <Text style={{color: this.props.selected ? '#FFFFFF' :'#FFFFFF'}}>{this.props.title}</Text>
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

        <Route name="login" component={SignIn} assets={assets} initial={true} wrapRouter={true} title="تسجيل الدخول"
               hideNavBar={false}
               navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
               titleStyle={{ color:'white', fontSize:17}}
               barButtonTextStyle={{ fontSize:17, color:'white' }}
               schema="default"
          />

        <Route name="register" component={Register} title="تسجيل الدخول" schema="default" hideNavBar={false}/>

        <Route name="tabbar">
          <Router footer={TabBar} showNavigationBar={true}
                  navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                  style={{backgroundColor:'#5BC3BE'}}
                  titleStyle={{ color:'white', fontSize:17}}
            >
            <Route name="tab1" schema="tab" tabIcon='fontawesome|cog' title="الاعدادات" component={Master}/>
            <Route name="tab2" schema="tab" title="مفضلات" tabIcon='fontawesome|heart'>
              <Router>
                <Route name="media" component={Media} title="Tab #1_1"/>
                <Route name="mediaItem" component={MediaItem} title="Tab #1_2"/>
              </Router>
            </Route>
            <Route name="tab3" schema="tab" title="مشترياتي" tabIcon='fontawesome|suitcase' component={Master}/>
            <Route name="tab4" schema="tab" title="الرئيسية" tabIcon='fontawesome|home' component={Master}/>
          </Router>
        </Route>

      </Router>

      //<Router {...this.props} assets={assets} initial={this.state.initialRoute}>
      //
      // <Schema name="default" {...defaultSchema} />
      //
      // <Route name="signIn" component={SignIn} type="reset" hideNavBar={true}/>
      // <Route name="register" component={Register} type="reset" title="تسجيل الدخول"/>
      // <Route name="detail" component={Detail}/>
      // <Route name="media" component={Media} title="مشترياتي"/>
      // <Route name="mediaItem" component={MediaItem}/>
      //
      // <TabRoute name="tabBar" barTint='#FFFFFF' tint="#32DEAF">
      // <Route name="tab4" component={Master('#111')}
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
