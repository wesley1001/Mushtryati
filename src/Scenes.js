import React, { Component } from 'react';
import {Scene, TabBar, Modal, Schema, Actions} from 'react-native-router-flux';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import Medias from './containers/Media/Medias';
import Media from './containers/Media/Media';
import User from './containers/User/User';
import UserScene from './components/User/UserScene';
import MediaComments from './containers/Media/MediaComments';
import MediaFavorites from './containers/Media/MediaFavorites';
import UserFavorites from './containers/User/UserFavorites';
import Home from './containers/Home';
import CaptureMedia from './containers/Media/CaptureMedia';
import TabIcon from './components/TabIcon';
import LoginDialog from './components/LoginDialog';

export const Scenes = Actions.create(
  <Scene key="modal" component={Modal} >
    <Scene key="root" hideNavBar={true}>

      <Scene key="tabBar" component={TabBar} tabs={true}>

        <Scene key="settingsTab" component={Medias} icon={TabIcon} selectedTabIcon="ion|ios-gear" tabIcon="ion|ios-gear-outline"  />
        <Scene key="favoritesTab" component={UserFavorites}  icon={TabIcon} selectedTabIcon="ion|android-star" tabIcon="ion|android-star-outline"   />
        <Scene key="likesTab" component={UserFavorites}  icon={TabIcon} selectedTabIcon="ion|android-favorite" tabIcon="ion|android-favorite-outline"   />

        <Scene initial={true} key="mediasRouter"  icon={TabIcon} selectedTabIcon="ion|briefcase" tabIcon="ion|briefcase" navigationBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}>
          <Scene key="mediasScene" hideNavBar={true} component={Medias} />
          <Scene key="mediaScene" component={Media} />
          <Scene key="userScene" component={User} />
          <Scene key="mediaCommentsScene" component={MediaComments} />
          <Scene key="userEntityScene" component={User} />
        </Scene>

        <Scene key="home" component={Medias} icon={TabIcon} selectedTabIcon="ion|ios-home" tabIcon="ion|ios-home-outline" />
      </Scene>
      <Scene key="captureMedia" hideTabBar={true} hideNavBar={true} component={CaptureMedia}  />
      <Scene key="loginDialog" schema="modal" hideNavBar={true}  component={LoginDialog} />

      <Scene key="login" hideNavBar={true} component={Login}  />
      <Scene key="register" component={Register} hideNavBar={true} title="تسجيل الدخول"   />

    </Scene>

  </Scene>
);