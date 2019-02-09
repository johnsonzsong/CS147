import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, StatusBar } from 'react-native';

import PickerScreen from './App/Screens/PickerScreen'

export default class App extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
        <PickerScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
