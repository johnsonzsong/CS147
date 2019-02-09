import React from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'

export default class SampleContentScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    // const tabBarOptions = {
    //   tabBarLabel: '1st!',
    //   tabBarIcon: ({ tintColor }) => (
    //     <MaterialIcons
    //       name='mood'
    //       color={tintColor}
    //       size={Metrics.icons.small}
    //     />
    //   )
    // }

    // let headerRight =
    //   <Button
    //     title={"Add"}
    //     onPress={() => navigation.navigate({
    //       routeName: "SampleContentScreen",
    //       params: {
    //         count: params && params.count ? params.count + 1 : 1
    //       },
    //       key: params && params.count ? params.count + 1 : 1
    //     })}
    //   />;

    const result = {
      // ...tabBarOptions,
      // headerRight: headerRight
    }

    return result;
  }

  state = {
    color: '#e1aaff'
  }

  // changeColor = (newColor) => {
  //   this.setState({color: newColor});
  // }

  openUserScreen = (name) => {
    this.props.navigation.navigate(name + "Screen");
  }

  componentDidMount() {
    console.log(JSON.stringify(this.props.navigation));
  }

  render() {
    const params = this.props.navigation.state.params;
    return (
      <View style={[ styles.container, {backgroundColor: this.state.color}]}>
        <FlatList
          data={[{key: 'a', name: 'Abdallah'}, {key: 'b', name: 'Santiago'}, {key: 'c', name: 'Crystal'}]}
          renderItem={({item}) =>
            <TouchableOpacity style={styles.nameRow} onPress={() => this.openUserScreen(item.name)}>
              <Text style={styles.nameText}>{item.name}</Text>
            </TouchableOpacity>
          }
        />
      </View>
    );

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameRow: {
    width: Metrics.screenWidth * .9,
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#8434af',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  nameText: {
    fontSize: 24,
    color: '#8434af',
  }
});
