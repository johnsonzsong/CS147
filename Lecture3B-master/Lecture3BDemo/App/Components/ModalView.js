import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';
import  Modal from 'react-native-modal';
import  Metrics from '../../Themes/Metrics.js';
import { WebBrowser, MapView, Location, Permissions } from 'expo';



export default class ModalView extends React.Component {

constructor(props) {
  super(props);
  this.state ={
    isModalVisible: false,
    randomThings: '',
    text: '',
  }
  console.log("props modal view " + JSON.stringify(props));
}

  addText =() => {
    var addedText = this.state.randomThings + " " + this.state.text;
    this.setState({ randomThings: addedText, text: ''});
  }

  modalAction =async() => {
    this.setState({checked: !this.state.checked, isModalVisible: true});
  }

  render() {
    return (
      <View style={styles.container}>
      <CheckBox
        center
        title='Click Here'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={this.state.checked}
        onPress={() => this.modalAction()}
      />
      <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
          backdropColor={'black'}>
          <View style={styles.modalStyle}>
            <Text style={styles.modalText}>
              Name something random!
            </Text>
            <Text style={styles.modalText}>


            </Text>
            <TextInput style={styles.inputText}
               placeholder="The Big Yellow One is The Sun"
               underlineColorAndroid="transparent"
               value={this.state.text}
               onChangeText={(text) => this.setState({text: text})}
               onSubmitEditing={(text) => this.setState({text: text})}
               />
              <Text> {this.state.randomThings} </Text>
              <Button
              title='Add'
              onPress={() => this.addText()}
              />
          </View>
        </Modal>
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
  modalStyle: {
    height: Metrics.screenHeight*.6,
    borderStyle: 'solid',
    borderWidth: .5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
