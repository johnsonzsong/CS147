import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { Images, Profiles } from './App/Themes';
import { Ionicons } from '@expo/vector-icons';
import TopBar from './App/Components/TopBar';
import MainView from './App/Components/MainView';
import ActionBar from './App/Components/ActionBar';

export default class App extends React.Component {
  constructor() {
    super();
    var barbaraProfile = Profiles.barbara;
    this.state = {
      profileImage: barbaraProfile.image,
      name: barbaraProfile.name,
      age: barbaraProfile.age,
      occupation: barbaraProfile.occupation
    };
  }

  randomProfile() {
    this.setState(Profiles.random());
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TopBar />
        <MainView {...this.state} randomProfile = {() => this.randomProfile()} />
        <ActionBar randomProfile = {() => this.randomProfile()} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
