import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'

export default class SampleContentScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const tabBarOptions = {
      tabBarLabel: '1st!',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name='mood'
          color={tintColor}
          size={Metrics.icons.small}
        />
      )
    }

    const result = {
      ...tabBarOptions,
    }

    //Exactly equals

    // const result = {
    //   tabBarLabel: '1st!',
    // tabBarIcon: ({ tintColor }) => (
    //   <MaterialIcons
    //     name='mood'
    //     color={tintColor}
    //     size={Metrics.icons.small}
    //   />
    // )
    // }

    return result;
  }

  state = {
    text: "0000ff",
  }

  componentDidMount() {
    console.log(JSON.stringify(this.props.navigation));
  }

  render() {
    const params = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <TextInput
          style={{width: 100, height: 40, borderWidth: 1}}
          value={this.state.text}
          onChangeText={(text) => this.setState({text: text})}
        />
        <Button
          title={"Change color!"}
          onPress={() => params.changeColor("#" + this.state.text)}
        />
        <Text> Another screen! </Text>
      </View>
    );

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'blue'
  }
});
