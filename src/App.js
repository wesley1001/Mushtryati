import React, { Component } from 'react';
import { StatusBar, Navigator } from 'react-native';
import { Router, Route, Schema, Animations, TabBar } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { loginUserByToken } from './actions/Auth/login';
import Home from './containers/Home';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import User from './containers/User/User';
import UserFavorites from './containers/User/UserFavorites';
import UserDownloads from './containers/User/UserDownloads';
import Media from './containers/Media/Media';
import Medias from './containers/Media/Medias';
import MediaComments from './containers/Media/MediaComments';
import MediaFavorites from './containers/Media/MediaFavorites';
import MediaDownloads from './containers/Media/MediaDownloads';
import CaptureMedia from './containers/Media/CaptureMedia';
import TabIcon from './components/TabIcon';
import LoginDialog from './components/LoginDialog';

class App extends Component {

  componentDidMount() {
    StatusBar.setBarStyle('light-content');
    const {dispatch} = this.props;
    dispatch(loginUserByToken()).then((success)=>{
      if(success) {
        //dispatch(fetchFavorites());
      }
    });
  }

  render() {
    return (
      <Router hideNavBar={true} name="root">
        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}
                navigationBarStyle={{backgroundColor: '#343459',borderBottomColor: '#343459'}}
                titleStyle={{ color:'white', fontSize:17}}
                barButtonTextStyle={{ fontSize:17, color:'white' }}
        />
        <Schema name="withoutAnimation"/>
        <Schema name="tab" type="switch" icon={TabIcon} />
        <Route initial={true}  name="tabBar">
          <Router footer={TabBar} hideNavBar={true} tabBarStyle={{backgroundColor:'#343459', justifyContent:'center', alignItems:'center', alignSelf:'center', height:40, paddingTop:10}}>
            <Route name="settingsScene" schema="tab" component={Medias} selectedTabIcon="ion|ios-gear" tabIcon="ion|ios-gear-outline"  />
            <Route name="userDownloadsScene" schema="tab" component={UserDownloads}  selectedTabIcon="ion|android-star" tabIcon="ion|android-star-outline"   />
            <Route name="userFavoritesScene" schema="tab" component={UserFavorites}  selectedTabIcon="ion|android-favorite" tabIcon="ion|android-favorite-outline"   />
            <Route name="mediaTab" initial={true}  schema="tab" selectedTabIcon="ion|briefcase" tabIcon="ion|briefcase" >
              <Router name="mediaRoutes" >
                <Route name="mediasScene" component={Medias} rightTitle="+" onRight={()=>alert('waa')} />
                <Route name="mediaScene" component={Media} />
                <Route name="mediaCommentsScene" component={MediaComments} />
                <Route name="mediaFavoritesScene" component={MediaFavorites} />
                <Route name="mediaDownloadsScene" component={MediaDownloads} />
                <Route name="userScene" component={User} />
              </Router>
            </Route>
            <Route name="home" hideNavBar={true}  schema="tab"  selectedTabIcon="ion|ios-home" tabIcon="ion|ios-home-outline">
              <Router name="homeRouter">
                <Route name="homeScene" component={Home}/>
              </Router>
            </Route>
          </Router>
        </Route>
        <Route name="captureMedia" hideTabBar={true} hideNavBar={true} component={CaptureMedia}  />
        <Route name="login" component={Login}  />
        <Route name="register" component={Register} title="تسجيل الدخول"   />
        <Route name="loginDialog" schema="modal" hideNavBar={true}  component={LoginDialog} />
      </Router>
    );

  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(App);
