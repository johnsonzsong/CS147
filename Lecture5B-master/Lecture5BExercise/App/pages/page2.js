import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';

export default class Page2 extends React.Component {
  static navigationOptions = {
     title: 'Page 2',
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
        <Text> Youre on Page 2 -- change default navigator here! </Text>

        <Button
          title="Change navigator"
          onPress={() => this.changeDefault()}
        />

        <Button
          title="Go to Page 3"
          onPress={() => this.props.navigation.navigate('Page3')}
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
