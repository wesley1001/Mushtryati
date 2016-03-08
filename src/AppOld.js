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
import Home from './containers/Home';
import TabIcon from './components/TabIcon';

export default class App extends Component {

  componentDidMount() {
    StatusBarIOS.setStyle('light-content');
  }

  render() {

    //return (
    //  <Router hideNavBar={true} name="root">
    //
    //    <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom} wrapRouter={true} />
    //    <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}
    //            navigationBarStyle={{backgroundColor: '#343459',borderBottomColor: '#343459'}}
    //            titleStyle={{ color:'white', fontSize:17}}
    //            barButtonTextStyle={{ fontSize:17, color:'white' }}
    //    />
    //    <Schema name="tab" type="switch" icon={TabIcon}/>
    //
    //    <Route name="tabBar">
    //      <Router footer={TabBar} tabBarStyle={{backgroundColor:'#343459'}}>
    //        <Route name="settingsTab" schema="tab" selectedTabIcon="fontawesome|cog" tabIcon="fontawesome|cog" title="الاعدادات" component={Master} />
    //        <Route name="favoritesTab" schema="tab" title="مفضلات" selectedTabIcon="ion|android-star" tabIcon="ion|android-star"  component={Favorites} />
    //        <Route name="mediasTab" schema="tab" title="مشترياتي" selectedTabIcon="fontawesome|suitcase" tabIcon="fontawesome|suitcase" >
    //          <Router hideNavBar={false}>
    //            <Route name="mediasScene" component={Medias} title="مشترياتي " />
    //            <Route name="mediaEntityScene" component={Media}/>
    //            <Route name="userScene" component={User} title="user"/>
    //            <Route name="mediaCommentsScene" component={MediaComments} title="تعليقات"/>
    //            <Route name="mediaFavoritesScene" component={MediaFavorites} title="Likers"/>
    //            <Route name="userEntityScene" component={User} title="user"/>
    //          </Router>
    //        </Route>
    //        <Route  type="replace" name="homeTab" initial={true} schema="tab" title="الرئيسية"  selectedTabIcon="fontawesome|home" tabIcon="fontawesome|home" component={Home}  />
    //      </Router>
    //    </Route>
    //
    //    <Route name="auth" hideNavBar={true}>
    //      <Router>
    //        <Route name="login" component={Login}  />
    //        <Route name="register" component={Register} title="تسجيل الدخول"   />
    //      </Router>
    //    </Route>
    //
    //  </Router>
    //
    //)

    return (
      <Router hideNavBar={true} name="root">
        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Schema name="withoutAnimation"/>
        <Schema name="tab" type="switch" icon={TabIcon} />

        <Route name="auth" inital={true} >
          <Router name="authRouter">
            <Route name="login" component={Login}  />
            <Route name="register" component={Register} title="تسجيل الدخول"   />
          </Router>
        </Route>
        <Route name="tabbar">
          <Router footer={TabBar} hideNavBar={true} tabBarStyle={{backgroundColor:'#343459'}}>
            <Route name="settingsTab" schema="tab" selectedTabIcon="fontawesome|cog" tabIcon="fontawesome|cog" title="الاعدادات" component={Master} />
            <Route name="favoritesTab" schema="tab" title="مفضلات" selectedTabIcon="ion|android-star" tabIcon="ion|android-star"  component={Favorites} />
            <Route name="mediasTab" schema="tab" title="مشترياتي" selectedTabIcon="fontawesome|suitcase" tabIcon="fontawesome|suitcase" >
              <Router name="mediasRouter">
                <Route name="mediasScene" component={Medias} title="مشترياتي " />
                <Route name="mediaEntityScene" component={Media}/>
                <Route name="userScene" component={User} title="user"/>
                <Route name="mediaCommentsScene" component={MediaComments} title="تعليقات"/>
                <Route name="mediaFavoritesScene" component={MediaFavorites} title="Likers"/>
                <Route name="userEntityScene" component={User} title="user"/>
              </Router>
            </Route>
            <Route name="homeTab"  schema="tab" selectedTabIcon="fontawesome|home" tabIcon="fontawesome|home">
              <Router>
                <Route name="homeTab1"  title="الرئيسية"     component={Home}/>
              </Router>
            </Route>
          </Router>
        </Route>
      </Router>
    );

  }
}