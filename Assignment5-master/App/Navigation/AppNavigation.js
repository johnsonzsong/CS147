import { createStackNavigator } from 'react-navigation'
import React from 'react';
import { Images, Colors, Metrics } from '../Themes'
import { StyleSheet, Image } from 'react-native';
import SearchScreen from '../Screens/SearchScreen'
import ArticleScreen from '../Screens/ArticleScreen'

const StackNav = createStackNavigator({
  SearchScreen: { screen: SearchScreen },
  ArticleScreen: { screen: ArticleScreen },
  },
  {
  headerMode: 'float',
  initialRouteName: 'SearchScreen',
  navigationOptions: ({navigation}) => {
    let navTitle = '';
    if (navigation.state.params) {
      navTitle = navigation.state.params.title || navTitle;
    }
    return {
      title: navTitle,
    }
  }
});

export default StackNav
