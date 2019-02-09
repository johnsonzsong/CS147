import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import VectorIcons from './App/Components/VectorIcons';
import WebComponent from './App/Components/WebComponent';
import MapComponent from './App/Components/MapComponent';

export default class App extends React.Component {

constructor(props) {
  super(props);
  this.state ={
  }
}


  render() {
    return (
      <View style={styles.container}>
        <VectorIcons/>
        <WebComponent/>
        <MapComponent/>
      </View>
    );
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
