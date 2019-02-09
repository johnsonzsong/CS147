import { createStackNavigator } from 'react-navigation'
import React from 'react';
import { Images, Colors, Metrics } from '../Themes'
import { StyleSheet, Image } from 'react-native';
import OnboardingScreen from '../Screens/OnboardingScreen'
import SearchScreen from '../Screens/SearchScreen'
import ArticleScreen from '../Screens/ArticleScreen'

const OnboardingNav = createStackNavigator({
  OnboardingScreen: { screen: OnboardingScreen },
  SearchScreen: { screen: SearchScreen },
  ArticleScreen: { screen: ArticleScreen }
  },
  {
  headerMode: 'float',
  initialRouteName: 'OnboardingScreen',
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

export default OnboardingNav
