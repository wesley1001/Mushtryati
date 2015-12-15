'use strict'

import React, { Component, StyleSheet,Navigator,Text,View,Image} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux/native'
import {assets} from '../utils/assets'
import { Icon } from 'react-native-icons';

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
          color={ this.props.selected ? 'gray' :'#FFFFFF'}
          style={{width:25,height:25,alignSelf:'center'}}
          />
        <Text style={{color: this.props.selected ? 'gray' :'#FFFFFF'}}>{this.props.title}</Text>
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


      <Router hideNavBar={true} initialRoutes={['tabbar']}>
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

        <Route name="tabbar">
          <Router footer={TabBar} showNavigationBar={false}
                  navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                  style={{backgroundColor:'#5BC3BE'}}
                  titleStyle={{ color:'white', fontSize:17}}
                  barButtonTextStyle={{ fontSize:17, color:'white' }}
            >
            <Route name="settingsTab" schema="tab" tabIcon='fontawesome|cog' title="الاعدادات" component={Master}
                   navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                   titleStyle={{ color:'white', fontSize:17}}
              />
            <Route name="favoritesTab" schema="tab" title="مفضلات" tabIcon='fontawesome|heart' component={Master2}
                   navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                   titleStyle={{ color:'white', fontSize:17}}
              />
            <Route name="mediaTab" schema="tab" title="مشترياتي" tabIcon='fontawesome|suitcase'>
              <Router
                navigationBarStyle={{backgroundColor: '#5BC3BE',borderBottomColor: '#5BC3BE'}}
                titleStyle={{ color:'white', fontSize:17}}
                barButtonTextStyle={{ fontSize:17, color:'white' }}
                >
                <Route name="mediaListTab" component={Media} title="مشترياتي"/>
                <Route name="mediaItemTab" component={MediaItem} title=""/>
              </Router>
            </Route>
            <Route name="tab4" schema="tab" title="الرئيسية" tabIcon='fontawesome|home'
                   component={Master3}
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
