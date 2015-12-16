'use strict'

import React, { Component, StyleSheet,Navigator,Text,View,Image} from 'react-native'
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux/native'
import {assets} from '../utils/assets'
import TabIcon from '../components/TabIcon'
import Detail from '../components/Detail'
import Media from '../containers/Media'
import Master from '../components/Master'
import SignIn from '../components/SignIn'
import Register from '../components/Register'
import MediaItem from '../components/MediaItem'
import MediaComment from '../components/MediaComment'

class Application extends Component {

  render() {
    return (
      <Router hideNavBar={true} initialRoutes={['login']}>
        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Schema name="withoutAnimation"/>
        <Schema name="tab" type="switch" icon={TabIcon}/>

        <Route name="login" component={SignIn} assets={assets} wrapRouter={true} title="تسجيل الدخول"
               hideNavBar={false}
               navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
               titleStyle={{ color:'white', fontSize:17}}
               barButtonTextStyle={{ fontSize:17, color:'white' }}
               schema="default"
          />

        <Route name="register" component={Register} title="تسجيل الدخول" schema="default" hideNavBar={false}/>

        <Route name="tabBar">
          <Router footer={TabBar} showNavigationBar={false}
                  navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                  style={{backgroundColor:'#5BC3BE'}}
                  titleStyle={{ color:'white', fontSize:17}}
                  barButtonTextStyle={{ fontSize:17, color:'white' }}
            >

            <Route name="mediaTab" schema="tab" title="مشترياتي" tabIcon='fontawesome|suitcase'>
              <Router
                navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                titleStyle={{ color:'white', fontSize:17}}
                barButtonTextStyle={{ fontSize:17, color:'white' }}
                >
                <Route name="mediaListTab" component={Media} title="مشترياتي"/>
                <Route name="mediaItemTab" component={MediaItem} title=""/>
                <Route name="mediaCommentTab" component={MediaComment} title="تعليقات"/>
              </Router>
            </Route>

            <Route name="settingsTab" schema="tab" tabIcon='fontawesome|cog' title="الاعدادات" component={Master}
                   navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                   titleStyle={{ color:'white', fontSize:17}}
              />
            <Route name="favoritesTab" schema="tab" title="مفضلات" tabIcon='fontawesome|heart' component={Master}
                   navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                   titleStyle={{ color:'white', fontSize:17}}
              />
            <Route name="tab4" schema="tab" title="الرئيسية" tabIcon='fontawesome|home'
                   component={Master}
                   navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                   titleStyle={{ color:'white', fontSize:17}}

              />

          </Router>
        </Route>
      </Router>

    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Application)
