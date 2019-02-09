import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Page1 extends React.Component {
  static navigationOptions = {
     title: 'Page 1',
   };

  render() {
    return (
      <View style={styles.container}>
        <Text> Youre on page 1 -- witness the expo component here! </Text>

        <Button
          title="Go to Page 2"
          onPress={() => this.props.navigation.navigate('Page2')}
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
