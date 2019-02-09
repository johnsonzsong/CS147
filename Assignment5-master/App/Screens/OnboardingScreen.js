import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { Images, Colors, Metrics } from '../Themes'
import { FontAwesome, Feather } from '@expo/vector-icons';
import { material } from 'react-native-typography';
import APIRequest from '../Config/APIRequest';
import AppNavigation from '../Navigation/AppNavigation';

export default class OnboardingScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      header: null
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={Images.logo} />

        // add onpress here
        <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('SearchScreen') }}>
          <FontAwesome name="newspaper-o" size={Metrics.images.large} />
          <Text style={material.title}> Click here to start reading the news! </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    resizeMode: 'contain',
    width: 0.9*Metrics.screenWidth,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
