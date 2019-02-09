import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, SafeAreaView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { WebBrowser } from 'expo';

export default class WebComponent extends React.Component {

constructor(props) {
  super(props);
  this.state ={

  }
}

webAction =async() => {
    WebBrowser.openBrowserAsync('https://google.com');
}

  render() {
    return (
      <View style={styles.container}>
        <Button
          center
          title="Web Browser"
          // checkedIcon='dot-circle-o'
          // uncheckedIcon='circle-o'
          onPress={() => this.webAction()}
        />
      </View>
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
});
