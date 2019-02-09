import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, StatusBar } from 'react-native';

import StackNavigation from './App/Navigation/StackNavigation'

export default class App extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
        <StackNavigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
