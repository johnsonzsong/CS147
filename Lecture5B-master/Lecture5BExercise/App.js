import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation';
import * as pages from './App/pages/index';

// Instructions
//    Stack Nav with 3 Screens
//    One screen must have expo component (Webview, Mapview, etc)
//    One Screen should change the default navigator
//    One screen should have the navigation.functions()



//    Drawer Nav with 3 Screens
//    1 screen must have header with a button that opens the drawer, and a button that calls a unique function
//    One screen should change the default navigator
//    You can do whatever you want to the other screen
//    Use Component Lifecycle and AsyncStorage to change the navigator

const StackNav = createStackNavigator({
  Home: {screen: pages.Home},
  Page1: {screen: pages.Page1},
  Page2: {screen: pages.Page2},
  Page3: {screen: pages.Page3}
},{
  initialRouteName: 'Home',
});

const DrawerNav = createDrawerNavigator({
  Page4: {screen: pages.Page4},
  Page1: {screen: pages.Page1},
  Page2: {screen: pages.Page2},
},{
  initialRouteName: 'Page4',
});

export default class App extends React.Component {
  state = {
    nav: "Stack",
  }

  componentDidMount =async() => {
    const defaultNavigation = await AsyncStorage.getItem('Navigation');
    if (defaultNavigation !== null) {
      if (defaultNavigation === 'Stack') {
        this.setState({nav: 'Stack'});
      } else {
        this.setState({nav: 'Drawer'});
      }
    } else {
      await AsyncStorage.setItem('Navigation', 'Stack');
    }
  }

  render() {
    if (this.state.nav === 'Stack') {
      return (
        <StackNav />
      );
    } else {
      return (
        <DrawerNav />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
