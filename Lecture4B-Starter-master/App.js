import React from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, FlatList, View, Button } from 'react-native';
import { AsyncStorage } from 'react-native';

export default class App extends React.Component {
  state = {
    textValue: '',
    items: []
  }

  async componentDidMount() {
    try{
      const value = await AsyncStorage.getItem('items');
      value = JSON.parse(value);
      if (value != null) {
        this.setState({items: value});
      }
      console.log('fetched: ' + this.state.items)
    } catch (error) {
      console.log('error fetching items from storage')
    }
  }

  listItemRenderer(item) {
      return (
        <View style={styles.listItem}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      );
    }

  insert = async () => {
    var newList = this.state.items.slice(); //slice creates copy in js
    newList.push(this.state.textValue);
    this.setState({items: newList});

    try {
      await AsyncStorage.setItem('items', JSON.stringify(this.state.items));
      console.log('updated: ' + this.state.items)
    } catch (error) {
      console.log('error adding item to storage');
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.textValue}
          onChangeText={(text) => this.setState({textValue: text})}
        />
        <FlatList
          data={this.state.items}
          style={styles.list}
          renderItem={({item}) => this.listItemRenderer(item)}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent = {() => (<View style={{height: 10}}/>)}
        />
        <Button
          title={"Add Item"}
          onPress={this.insert}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '90%',
    marginTop: 16,
    marginBottom: 16,
    borderBottomWidth: 2,
    fontSize: 18,
    justifyContent: 'center'
  },
  list: {
    width: '100%',
    flex: 1
  },
  listItem: {
    backgroundColor: "#4286f4",
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 18,
    color: 'white',
  }
});
