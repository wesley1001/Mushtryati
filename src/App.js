'use strict';
import React, { Component, StyleSheet,Navigator,Text,View,Image} from 'react-native';
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux';
import Master from './components/Master';
import Login from './containers/Login';
import Register from './containers/Register';
import Medias from './containers/Medias';
import Media from './containers/Media';
import Comments from './containers/Comments';
import Favorites from './containers/Favorites';
import TabIcon from './components/TabIcon';
export default class App extends Component {

  render() {
    return (
      <Router hideNavBar={true} initialRoutes={['login']}>

        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Schema name="withoutAnimation"/>
        <Schema name="tab" type="switch" icon={TabIcon}/>

        <Route name="login" component={Login} wrapRouter={true} title="تسجيل الدخول"
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

            <Route name="tab4" schema="tab" title="الرئيسية" tabIcon='fontawesome|home'
                   component={Master}
                   navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                   titleStyle={{ color:'white', fontSize:17}}
              />

            <Route name="mediaTab" schema="tab" title="مشترياتي" tabIcon='fontawesome|suitcase'>
              <Router
                navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                titleStyle={{ color:'white', fontSize:17}}
                barButtonTextStyle={{ fontSize:17, color:'white' }}
                >
                <Route name="mediasTab" component={Medias} title="مشترياتي"/>
                <Route name="mediaEntityTab" component={Media} title=""/>
                <Route name="mediaCommentsTab" component={Comments} title="تعليقات"/>
              </Router>
            </Route>

            <Route name="settingsTab" schema="tab" tabIcon='fontawesome|cog' title="الاعدادات" component={Master}
                   navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                   titleStyle={{ color:'white', fontSize:17}}
              />

            <Route name="favoritesTab" schema="tab" title="مفضلات" tabIcon='fontawesome|heart' component={Favorites}
                   navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                   titleStyle={{ color:'white', fontSize:17}}
              />


          </Router>
        </Route>

      </Router>

    )
  }
}

