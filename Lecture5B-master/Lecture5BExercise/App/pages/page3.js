import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Page3 extends React.Component {
  static navigationOptions = {
     title: 'Page 3',
   };

  render() {
    return (
      <View style={styles.container}>
      <Text> Youre on Page 3! </Text>
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
