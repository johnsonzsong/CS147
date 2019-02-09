import React from 'react';
import { StyleSheet, Text, View, Image, Button, AsyncStorage } from 'react-native';
import { Images, Metrics } from './App/Themes';
import AppNavigation from './App/Navigation/AppNavigation';
import OnboardingNavigation from './App/Navigation/OnboardingNavigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    showOnBoard: false,
  }

  async getOnBoardStatus() {
    try {
      const value = await AsyncStorage.getItem('showOnBoard');
      if (value == null) {
        this.setState({showOnBoard: true});
        await AsyncStorage.setItem('showOnBoard', 'false');
      } else if (value != null) {
       this.setState({showOnBoard: false})
      }
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  componentDidMount() {
    this.getOnBoardStatus();
  }

  renderFirstScreen() {
    if (this.state.showOnBoard === true) {
      return (
        <OnboardingNavigation/>
      );
    } else {
      return (
        <View style={styles.container}>
          <AppNavigation/>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderFirstScreen()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    resizeMode: 'contain',
    width: 0.9*Metrics.screenWidth,
    top: 0.3*Metrics.screenHeight
  }
});
