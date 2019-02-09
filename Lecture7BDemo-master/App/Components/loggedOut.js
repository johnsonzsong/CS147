import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,  } from 'react-native';
import { Images, Colors, Metrics } from '../Themes';



export default class LoggedOut extends React.Component {


  render() {

      return (
        <View style={styles.container}>
        <Text>
        Go sign in fam
        </Text>
        </View>
      );

    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
