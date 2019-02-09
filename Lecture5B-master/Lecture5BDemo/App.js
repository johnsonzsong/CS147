import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation';
import * as pages from './App/pages';

const ParamsNav = createStackNavigator({
  Params: {screen: pages.ParamsFunction},
});

const StackNav = createStackNavigator({
  Home: {screen: pages.ItBeLikeThat},
  Buttons: {screen: pages.Buttons},
  ChangeNavigation: {screen: pages.ChangeNavigation},
},{
  initialRouteName: 'Home',
});

const DrawerNav = createDrawerNavigator({
  ParamsFunction: {screen: ParamsNav},
  ChangeNavigation: {screen: pages.ChangeNavigation},
  DrawerFunctions: {screen: pages.DrawerFunctions},
},{
  initialRouteName: 'DrawerFunctions',
});

export default class App extends React.Component {
  state = {
    nav: "Stack",
  }

  componentDidMount = async() => {
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
