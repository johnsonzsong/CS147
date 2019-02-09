import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import React from 'react';
import { Images, Colors, Metrics } from '../Themes'
import { StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreen'
import BookmarkScreen from '../Screens/BookmarkScreen'
import BookmarkViewerScreen from '../Screens/BookmarkViewerScreen'
import UserProfileScreen from '../Screens/UserProfileScreen'


/* PART 1: Create a StackNavigator that contains the HomeScreen, and the UserProfileScreen */
/* initialRouteName should be your HomeScreen. Set headerMode to 'float'  */

const HomeNav = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  UserProfileScreen: { screen: UserProfileScreen },
}, {
  headerMode: 'float',
  initialRouteName: 'HomeScreen',
  navigationOptions: ({navigation}) => {
    let navTitle = 'Home';
    if (navigation.state.params) {
      navTitle = navigation.state.params.title || navTitle;
    }
    return {
      title: navTitle,
    }
  }
});

HomeNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Entypo name="home"
        size={Metrics.icons.medium}
        color={tintColor} />
    ),
  };
};

/* PART 2: Create a StackNavigator that contains the BookmarkScreen, and the BookmarkViewerScreen */
/* initialRouteName should be your BookmarkScreen. Set headerMode to 'float'  */
const BookmarkNav = createStackNavigator({
  BookmarkScreen: { screen: BookmarkScreen },
  BookmarkViewerScreen: { screen: BookmarkViewerScreen },
}, {
  headerMode: 'float',
  initialRouteName: 'BookmarkScreen',
  navigationOptions: ({navigation}) => {
    let navTitle = 'Bookmark';
    if (navigation.state.params) {
      navTitle = navigation.state.params.title || navTitle;
    }
    return {
      title: navTitle,
    }
  }
});

BookmarkNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Bookmarks',
    tabBarIcon: ({ tintColor }) => (
      <Entypo name="bookmark"
        size={Metrics.icons.medium}
        color={tintColor} />
    ),
  };
};

/* PART 3: nest both StackNavigators in the TabNavigator below */
/* Your FeedScreen should point to the StackNavigator that you created in Part 1 */
/* Your BookmarkScreen should point to the StackNavigator that you created in Part 2 */

/* OPTIONAL: Add icons for both tabs using navigationOptions as shown in lecture

BookmarkNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Bookmarks',
    tabBarIcon: ({ tintColor }) => (
      <Entypo name="bookmark"
        size={Metrics.icons.medium}
        color={tintColor} />
    ),
  };
};

*/

// Manifest of possible screens
const TabNav = createBottomTabNavigator({
  FeedScreen: { screen: HomeNav },
  BookmarkScreen:   { screen: BookmarkNav },
}, {
  // Default config for all screens
  initialRouteName: 'FeedScreen',
  tabBarOptions: {
    activeTintColor: Colors.black,
    showLabel: false,
  },
})

export default TabNav
