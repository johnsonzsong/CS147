import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
     title: 'Home',
   };
   
  render() {
    return (
      <View style={styles.container}>
        <Text> Youre on the Home Page! </Text>
        <Button
          title="Go to Page 1"
          onPress={() => this.props.navigation.navigate('Page1')}
        />
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
