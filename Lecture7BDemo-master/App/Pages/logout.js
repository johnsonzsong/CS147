//logout button
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,  } from 'react-native';
import { Images, Colors, Metrics } from '../Themes';
import firebase from 'firebase';



export default class Logout extends React.Component {

// logout =() => {
//  firebase.auth().signOut();
// }

  render() {

      return (
        <View style={styles.container}>
          <Button
          title='Logout'
          onPress={() => this.logout()}/>
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
