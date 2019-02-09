import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';

export default class ChangeNavigation extends React.Component {

  static navigationOptions = {
     title: 'Change Navigation',
   };

   changeDefault = async() => {
     const defaultNavigation = await AsyncStorage.getItem('Navigation');
     if (defaultNavigation !== null) {
       if (defaultNavigation === 'Stack') {
         await AsyncStorage.setItem('Navigation', 'Drawer');
       } else {
         await AsyncStorage.setItem('Navigation', 'Stack');
       }
     } else {
       await AsyncStorage.setItem('Navigation', 'Stack');
     }
   }

  render() {
    return (
      <View style={styles.container}>
      <Button
        title="Change Default"
        onPress={() => this.changeDefault()}
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
