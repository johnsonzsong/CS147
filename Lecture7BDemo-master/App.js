import React from 'react';
import { StyleSheet, Text, View, Image, Button, ActivityIndicator, SectionList, Dimensions } from 'react-native';
import { createStackNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation';
import { Images, Colors, Metrics } from './App/Themes';
import ProfileCard from './App/Components/profileCard';
import firebase from 'firebase';
import * as pages from './App/Pages';

/*
1. npm install --save firebase
2. create a firebase project
3. create a realtime database, click web setup and copy/paste config var
*/

const {width, height} = Dimensions.get('window');

var config = {
    apiKey: "AIzaSyDfZZwtPxRjxaMd7vsCCB8BPc60rdgxmQY",
    authDomain: "letsgetthisbread-f9c6c.firebaseapp.com",
    databaseURL: "https://letsgetthisbread-f9c6c.firebaseio.com",
    projectId: "letsgetthisbread-f9c6c",
    storageBucket: "letsgetthisbread-f9c6c.appspot.com",
    messagingSenderId: "478219849486"
  };
  firebase.initializeApp(config);

const DrawerNav = createDrawerNavigator({
  Login: {screen: pages.Login},
  // BuildProfile: {screen: pages.BuildProfile},
  // Profiles: {screen: pages.Profiles},
  // Logout: {screen: pages.Logout},
},{
  initialRouteName: 'Login',
});

export default class App extends React.Component {



  render() {

      return (
        <DrawerNav />
      );

    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
