import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Colors, Images, Metrics, Profiles } from '../Themes';


export default class NavigationBar extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.navBar}>
        <Image style={styles.navBarIcon} source={Images.settings}/>
        <Image style={styles.logoImage} source={Images.logo}/>

        <Image style={styles.navBarIcon} source={Images.chat}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: Metrics.borderWidth,
    borderBottomColor: Colors.tint,
    height: Metrics.navBarHeight,
    marginTop: Metrics.doubleSection
  },
  navBarIcon: {
    flex: 1,
    resizeMode: 'contain',
    height: 36,
    tintColor: Colors.tint
  },
  logoImage: {
    flex: 3,
    resizeMode: 'contain',
    height: 36
  }
});
