import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Colors, Images, Metrics, Profiles } from './App/Themes';
import SwipeCards from './App/Components/SwipeCards';
import NavigationBar from './App/Components/NavigationBar'
import ButtonsBar from './App/Components/ButtonsBar'

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar />
        <SwipeCards />
        <ButtonsBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
