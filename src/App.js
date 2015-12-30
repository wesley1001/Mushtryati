'use strict';
import React, { Component, StyleSheet,Navigator,Text,View,Image,StatusBarIOS} from 'react-native';
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux';
import Master from './components/Master';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import Medias from './containers/Medias';
import Media from './containers/Media/Media';
import User from './containers/Auth/User';
import UserScene from './components/Auth/UserScene';
import MediaComments from './containers/Media/MediaComments';
import MediaFavorites from './containers/Media/MediaFavorites';
import Favorites from './containers/Favorites';
import TabIcon from './components/TabIcon';

export default class App extends Component {

  constructor(props) {
    super(props);
    StatusBarIOS.setStyle('light-content');
  }

  render() {

    return (
      <Router hideNavBar={true} initialRoutes={['login','tabBar']}>

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

        <Route name="register" component={Register} title="تسجيل الدخول" schema="default" hideNavBar={true}/>

        <Route name="tabBar">

          <Router footer={TabBar} showNavigationBar={false}
                  navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                  style={{backgroundColor:'#5BC3BE'}}
                  titleStyle={{ color:'white', fontSize:17}}
                  barButtonTextStyle={{ fontSize:17, color:'white' }}
            >

            <Route name="mediasTab" schema="tab" title="مشترياتي" tabIcon="fontawesome|suitcase">

              <Router
                navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                titleStyle={{ color:'white', fontSize:17}}
                barButtonTextStyle={{ fontSize:17, color:'white' }}
                schema="default"
                >
                <Route name="mediasScene" component={Medias} title="مشترياتي"/>
                
                <Route name="mediaEntityScene" component={Media}/>
                  <Route name="userScene" component={User} title="user"/>

                <Route name="mediaCommentsScene" component={MediaComments} title="تعليقات"/>
                <Route name="mediaFavoritesScene" component={MediaFavorites} title="Likers"/>
                <Route name="userEntityScene" component={User} title="user"/>
              </Router>
            </Route>

            <Route name="settingsTab" schema="tab" tabIcon='fontawesome|cog' title="الاعدادات" component={Master}
                   navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                   titleStyle={{ color:'white', fontSize:17}}
              />

            <Route name="favoritesTab" schema="tab" title="مفضلات" tabIcon='ion|android-star' component={Favorites}
                   navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                   titleStyle={{ color:'white', fontSize:17}}
              />

            <Route name="homeTab" schema="tab" title="الرئيسية" tabIcon='fontawesome|home'
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
