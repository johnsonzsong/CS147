import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList, ActivityIndicator, Keyboard, Linking, WebView } from 'react-native';
import { Images, Colors, Metrics } from '../Themes'
import { FontAwesome, Feather } from '@expo/vector-icons';
import { material } from 'react-native-typography';
import APIRequest from '../Config/APIRequest';
import AppNavigation from '../Navigation/AppNavigation';

export default class ArticleScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerMode: 'float',
      headerTitle: (
        <View style={{justifyContent: 'center', alignItems: 'center', height: 60}}>
          <Image style={styles.logo} source={Images.logo} />
        </View>
      ),

    };
  };

  state = {
    content: {},
  }

  componentDidMount(){
    const params = this.props.navigation.state.params || {};
    const content = params.content;
    this.setState({content: content});
  }

  render() {
    return (
      <WebView
        source={{uri: this.state.content.url}}
      />
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
    height: 37,
  },
});
