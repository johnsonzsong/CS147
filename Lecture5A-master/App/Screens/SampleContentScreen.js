import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'

export default class SampleContentScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    const headerRight = <Button
                            title="Add"
                            onPress={() => navigation.navigate("SampleScreen", { title: "Another screen", screenDescription: "This is another screen" })} />
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
      headerRight: headerRight
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
  componentDidMount() {
    console.log(JSON.stringify(this.props.navigation));
    // this.props.navigation.setParams({handleAdd: this._handleAdd});
  }

  render() {
    const params = this.props.navigation.state.params;
    return (
      <View style={[ styles.container]}>
        <Text style={styles.text}>{params ? params.screenDescription : "Sample"}</Text>
        <Text style={styles.text}>{"Some count"}</Text>
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
