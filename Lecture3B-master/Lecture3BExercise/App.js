import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default class App extends React.Component {

constructor(props) {
  super(props);
  this.state ={
  }
}


  render() {
    return (
      <View style={styles.container}>

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
