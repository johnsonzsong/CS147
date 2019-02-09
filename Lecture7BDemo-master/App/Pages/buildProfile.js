import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, Image } from 'react-native';
import { Images, Colors, Metrics } from '../Themes';
import {ImagePicker, Permissions} from 'expo';
import firebase from 'firebase';
import LoggedOut from '../Components/loggedOut';

export default class BuildProfile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      image: '',
      meme: '',
      iceCream: '',
      loggedIn: false,
    }
  }

//   componentDidMount() {
//     this.checkIfUserLoggedIn();
//   }
//
//   checkIfUserLoggedIn = async() => {
//   //   var that = this;
//   //   firebase.auth().onAuthStateChanged(function(user) {
//   //   if (user) {
//   //     that.setState({loggedIn: true});
//   //   }
//   // });
//
//    }
//
//   onPressUploadPicture = async () => {
//     // let result = await ImagePicker.launchImageLibraryAsync({
//     //   allowsEditing: true,
//     //   aspect: [4, 3],
//     // });
//     //
//     // console.log(result);
//     //
//     // if (!result.cancelled) {
//     //   this.setState({ image: result.uri });
//     // }
//   };
//
//   updateInfo = async () => {
//   // if ((this.state.iceCream !== '') && (this.state.meme !== '') && (this.state.image !== '')) {
//   //   await this.storeItem();
//   // } else {
//   //   alert('Please Fill in All Categories');
//   // }
// };
//
//
// onPressTakePicture = async () => {
//   // let result = await ImagePicker.launchCameraAsync({
//   //   allowsEditing: true,
//   //   aspect: [4, 3],
//   // });
//   //
//   // if (!result.cancelled) {
//   //   this.setState({image: result.uri});
//   // }
// };
//
// storeItem = async () => {
//     // const ref = firebase.storage().ref('users').child(firebase.auth().currentUser.uid).child("image");
//     // const response = await fetch(this.state.image);
//     // const blob = await response.blob();
//     // var that = this;
//     //
//     // await ref.put(blob).then((snapshot) => {
//     //   console.log('puts blob');
//     //
//     //   snapshot.ref.getDownloadURL().then(function(downloadURL) {
//     //     that.setState({image: downloadURL, test: 'testSuccessful'});
//     // });
//     //
//     // });
//     //
//     // await firebase.database().ref('users').child(firebase.auth().currentUser.uid).update({
//     //     meme: this.state.meme,
//     //     iceCream: this.state.iceCream,
//     //     image: this.state.image,
//     //   });
//
//   };

  render() {

    let {image} = this.state;


    let contentView = null;
    if (this.state.image === '') {
      contentView =
        (<View>
          <Button
            onPress={() => this.onPressUploadPicture()}
            title="Upload Profile Pic"
          />
          <Button
            onPress={() => this.onPressTakePicture()}
            title="Take Profile Pic"
            />
        </View>)

    } else {
      contentView = (
        <Image source={{uri: image}} style={styles.picture}/>
      );
    }

if (this.state.loggedIn === true) {

      return (
        <View style={styles.container}>
          <View style={styles.pictureBox}>
            {contentView}
            {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </View>

          <View style={styles.itemInformation}>

            <TextInput style={styles.inputText}
                       placeholder="Worst Ice Cream Flavor"
                       underlineColorAndroid="transparent"
                       onChangeText={(text) => this.setState({iceCream: text})}
            />

            <TextInput style={styles.inputText}
                       placeholder="Fav Meme"
                       underlineColorAndroid="transparent"
                       onChangeText={(meme) => this.setState({meme})}
            />
            <Button
              title="Update Info"
              onPress={() => this.updateInfo()}/>
            </View>
        </View>
      );

    } else {
        return (<LoggedOut />);
    }
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemInformation: {
  flex: 1.5,
  flexDirection: 'column',
   alignItems: 'center',
  //  justifyContent: 'space-around',
  margin: 20,
  backgroundColor: 'white',
  //  padding: 15,
},
pictureBox: {
  height: Metrics.screenHeight * .3,
  width: Metrics.screenWidth * .6,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20,
  borderStyle: 'solid',
  borderWidth: .5,
  backgroundColor: 'white',
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  //  padding: 10,
},
});
