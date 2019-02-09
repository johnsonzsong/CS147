import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Colors, Images, Metrics, Profiles } from '../Themes';


export default class ButtonsBar extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.buttonsBar}>
          <View style={styles.buttonWrapperSmall}>
            <Image style={styles.buttonImageSmall} source={Images.rewind}/>
          </View>

          <View style={styles.buttonWrapperLarge}>
            <Image style={styles.buttonImageLarge} source={Images.nope}/>
          </View>

          <View style={styles.buttonWrapperSmall}>
            <Image style={styles.buttonImageSmall} source={Images.boost}/>
          </View>

          <View style={styles.buttonWrapperLarge}>
            <Image style={styles.buttonImageLarge} source={Images.like}/>
          </View>

          <View style={styles.buttonWrapperSmall}>
            <Image style={styles.buttonImageSmall} source={Images.superLike}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: Metrics.doubleSection,
    width: Metrics.screenWidth,
  },
  buttonWrapperSmall: {
    backgroundColor: Colors.white,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonImageSmall: {
    resizeMode: 'contain',
    width: Metrics.images.small,
    height: Metrics.images.small,
  },
  buttonWrapperLarge: {
    backgroundColor: Colors.white,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonImageLarge: {
    resizeMode: 'contain',
    width: Metrics.images.medium,
    height: Metrics.images.medium,
  }
});
