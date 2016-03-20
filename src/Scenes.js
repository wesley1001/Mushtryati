import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Scene, TabBar, Modal, Schema, Actions,Switch} from 'react-native-router-flux';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import Medias from './containers/Media/Medias';
import Media from './containers/Media/Media';
import User from './containers/User/User';
import UserScene from './components/User/UserScene';
import MediaComments from './containers/Media/MediaComments';
import MediaFavorites from './containers/Media/MediaFavorites';
import UserFavorites from './containers/User/UserFavorites';
import UserDownloads from './containers/User/UserDownloads';
import Home from './containers/Home';
import CaptureMedia from './containers/Media/CaptureMedia';
import TabIcon from './components/TabIcon';
import LoginDialog from './components/LoginDialog';

const styles = StyleSheet.create({
  container: {
    flex:1, backgroundColor:'white',justifyContent: 'center',alignItems: 'center'
  }
});

export const Scenes = Actions.create(

  <Scene key="modal" component={Modal} >

    <Scene key="root" hideNavBar={true} >

      <Scene key="tabBar" component={TabBar} tabs={true}
             tabBarStyle={{backgroundColor:'#343459', justifyContent:'center', alignItems:'center', alignSelf:'center', height:40, paddingTop:10}}
             default="mediasRouter" selector={props=>props.default}
      >

        <Scene key="settingsTab" component={Medias} icon={TabIcon} selectedTabIcon="ion|ios-gear" tabIcon="ion|ios-gear-outline"
               navigationBarStyle={{backgroundColor: '#343459',borderBottomColor: '#343459'}}
               titleStyle={{ color:'white', fontSize:17}}
               barButtonTextStyle={{ fontSize:17, color:'white' }}
        />

        <Scene key="downloadsTab" icon={TabIcon} selectedTabIcon="ion|android-star" tabIcon="ion|android-star-outline"
               navigationBarStyle={{backgroundColor: '#343459',borderBottomColor: '#343459'}}
               titleStyle={{ color:'white', fontSize:17}}
               barButtonTextStyle={{ fontSize:17, color:'white' }}
        >
          <Scene key="downloadsScene" component={UserDownloads} />


        </Scene>

        <Scene key="favoritesTab" icon={TabIcon} selectedTabIcon="ion|android-favorite" tabIcon="ion|android-favorite-outline"
               navigationBarStyle={{backgroundColor: '#343459',borderBottomColor: '#343459'}}
               titleStyle={{ color:'white', fontSize:17}}
               barButtonTextStyle={{ fontSize:17, color:'white' }}
        >
          <Scene key="favoritesScene" component={UserFavorites} />
        </Scene>

        <Scene initial={true} key="mediasRouter" icon={TabIcon} selectedTabIcon="ion|briefcase" tabIcon="ion|briefcase"
               navigationBarStyle={{backgroundColor: '#343459',borderBottomColor: '#343459'}}
               titleStyle={{ color:'white', fontSize:17}}
               barButtonTextStyle={{ fontSize:17, color:'white' }}
               style={styles.container}
        >
          <Scene key="mediasScene"  component={Medias} rightTitle="+" onRight={()=>Actions.captureMedia()}   />
          <Scene key="mediaScene" component={Media} />
          <Scene key="userScene" component={User} />
          <Scene key="mediaCommentsScene" component={MediaComments} />
          <Scene key="userEntityScene" component={User} />
        </Scene>

        <Scene key="home" hideNavBar={true} component={Home} icon={TabIcon} selectedTabIcon="ion|ios-home" tabIcon="ion|ios-home-outline" />

      </Scene>

      <Scene key="captureMedia" hideNavBar={true} component={CaptureMedia}  />
      <Scene key="loginDialog"  hideNavBar={true}  component={LoginDialog} />

      <Scene key="login" hideNavBar={true} component={Login}  />
      <Scene key="register" component={Register} hideNavBar={true} title="تسجيل الدخول"   />

    </Scene>

  </Scene>
);

