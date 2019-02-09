import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import  Metrics from '../../Themes/Metrics.js';

export default class VectorIcons extends React.Component {

constructor(props) {
  super(props);
  this.state ={

  }
  console.log("props modal view " + JSON.stringify(props));
}

  render() {
    return (
      <View style={styles.container}>

        <FontAwesome
          name="plus-square"
          size={Metrics.icons.medium}
          />

        <Feather
          name="check"
          size={Metrics.icons.small}
          color='blue'
          />

          <MaterialCommunityIcons
            name="check"
            size={Metrics.icons.large}
            onPress={() => alert('Pressed')}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
