import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
        style = {styles.imageStyle}
        source={require('./assets/stockPhoto.png')}/>

        <View style={styles.textView}>
          <Text style={{fontSize: 16}}>
            <Text style={{fontWeight: 'bold'}}> Guillermo Moreno </Text>with
            <Text style={{fontWeight: 'bold'}}> Josephine Williams </Text>and
            <Text style={{fontWeight: 'bold'}}> 2 others. </Text>
          </Text>

          <Text style={{color: 'gray', fontSize: 12}}>
            Yesterday at 11:14 PM
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    top: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: 'gray',
    borderTopWidth: 2,
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30
  },

  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15
  },

  textView: {
  },
});
