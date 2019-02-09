//login form/functionality as schoolbudd
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, AsyncStorage, SafeAreaView } from 'react-native';
import { Images, Colors, Metrics } from '../Themes';
import firebase from 'firebase';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      signUpName: '',
      signUpEmail: '',
      signUpPassword: '',
      loginEmail: '',
      loginPassword: '',
      errorMessageLogin: '',
    }
}

// signUp = async() => {
//   await firebase.auth().createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword)
//   .then(this.completeSignUp)
//   .catch(function (error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     if (errorCode == null) {
//       alert("success");
//     } else if (errorCode == 'auth/weak-password') {
//       alert('The password is too weak.');
//     } else if (errorCode == 'auth/email-already-in-use') {
//       alert('This email already has an account');
//     } else if (errorCode == 'auth/invalid-email') {
//       alert('Please enter a valid email');
//     } else {
//       alert(errorMessage);
//     }
//     console.log(error);
//   });
//   var user = firebase.auth().currentUser;
//   firebase.database().ref('users').child(user.uid).child('name').set(this.state.signUpName);
//   this.verifyEmail();
// }
//
// login = async() => {
//   await firebase.auth().signInWithEmailAndPassword(this.state.loginEmail, this.state.loginPassword)
//   .catch(error => this.setState({ errorMessageLogin: error.message }));
//
//     if (this.state.errorMessageLogin == "") {
//       console.log("email " + this.state.loginEmail);
//       console.log("password " + this.state.loginPassword);
//     } else {
//       alert(this.state.errorMessageLogin);
//     }
// }
//
// verifyEmail = () => {
//   firebase.auth().currentUser.sendEmailVerification()
//     .then(() => {
//       // Verification email sent.
//       console.log("email Verification sent");
//       Alert.alert(
//         'Email Verification',
//         "We've sent a user verification email. Please click the link in your email inbox to be verified as a user",
//         [
//           { text: 'OK', onPress: () => this.setState({ skypeAlertClear: true }), style: 'cancel' },
//         ],
//         { cancelable: false }
//       )
//     })
//     .catch(function (error) {
//       // Error occurred. Inspect error.code.
//     });
// }

  render() {

      return (
        <SafeAreaView style={styles.container}>

          <TextInput
            value={this.state.signUpName}
            onChangeText={(signUpName) => this.setState({ signUpName })}
            placeholder="Name" />
          <TextInput
            value={this.state.signUpEmail}
            onChangeText={(signUpEmail) => this.setState({ signUpEmail })}
            placeholder="Email" />
          <TextInput
            value={this.state.signUpPassword}
            secureTextEntry={true}
            onChangeText={(signUpPassword) => this.setState({ signUpPassword })}
            placeholder="Password" />

            <Button
              title="Sign Up"
              onPress={()=> this.signUp()}
              />


          <TextInput
            value={this.state.loginEmail}
            onChangeText={(loginEmail) => this.setState({ loginEmail })}
            placeholder="Email" />
          <TextInput
            value={this.state.loginPassword}
            secureTextEntry={true}
            onChangeText={(loginPassword) => this.setState({ loginPassword })}
            placeholder="Password" />

          <Button
            title='Login'
            onPress={()=> this.login()}
            />
      </SafeAreaView>

      );

    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
