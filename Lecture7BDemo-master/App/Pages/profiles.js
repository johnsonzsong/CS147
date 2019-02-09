import React from 'react';
import { StyleSheet, Text, View, Image, Button, ActivityIndicator, SectionList, Dimensions } from 'react-native';
import { createStackNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation';
import { Images, Colors, Metrics } from '../Themes';
import ProfileCard from '../Components/profileCard';
import firebase from 'firebase';
import LoggedOut from '../Components/loggedOut';

/*
1. npm install --save firebase
2. create a firebase project
3. create a realtime database, click web setup and copy/paste config var
*/

const {width, height} = Dimensions.get('window');

export default class Profiles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jedisSectioned: [{title: 'Jedis', data:[]}],
      loading: false,
      refreshing: false,
      loggedIn: false,
    }
    //see what props App.js is constructed with:
    console.log(JSON.stringify(props));
  }


  // async appendJedis(count, start) {
  //   var jedisList = [];
  //   console.log("jedislist " + JSON.stringify(jedisList));
  //   this.setState({loading: true});
  //   var database = firebase.database();
  //   database.ref('users').on('child_added', (snapshot) => {
  //     console.log("testing enter firebase ref");
  //     var childKey = snapshot.key;
  //     var childData = snapshot.val();
  //     childData.key = childKey;
  //     console.log("child data pulled" + JSON.stringify(childData));
  //
  //     jedisList.push(childData);
  //
  //     this.setState({ loading: false, refreshing: false, jedisSectioned: [{ title: 'Jedis', data: jedisList }] });
  //     console.log(childData);
  //   });
  // }
  //
  // componentDidMount() {
  //   this.checkIfUserLoggedIn();
  //   this.appendJedis(3,1);
  //   // console.log(this.state.jedis);
  // }
  //
  //
  //   checkIfUserLoggedIn = async() => {
  //     var that = this;
  //     firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       that.setState({loggedIn: true});
  //     }
  //   });
  //
  //    }
  //
  // listItemRenderer(item) {
  //   return (
  //     <ProfileCard jedi={item} />
  //   );
  // }
  //
  // async loadMore(count, start) {
  //   if (start > 1 && !this.state.refreshing && !this.state.loading) {
  //     this.setState({loading: true});
  //     console.log(start);
  //     await this.appendJedis(count,start);
  //   }
  // }
  //
  // _keyExtractor = (item, index) => index;
  //
  //
  // resetList = () => {
  //   this.setState({refreshing: true, jedisSectioned: [{title: 'Jedis', data:[]}]});
  //   this.appendJedis(3,1);
  // }

  render() {
    if (this.state.loggedIn === true) {

    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.jedisSectioned}
          renderItem={({item}) => this.listItemRenderer(item)}
          ItemSeparatorComponent = {() => (<View style={{height: 10}}/>)}
          keyExtractor={this._keyExtractor}
          contentContainerStyle = {{alignItems: 'center'}}
          renderSectionHeader={({section}) =>
            <View style={styles.header}>
              <Text style={styles.title}>{section.title}</Text>
            </View>
          }
          onRefresh = {() => this.resetList()}
          refreshing = {this.state.refreshing}
          removeClippedSubviews = {true}
          ListFooterComponent = {<ActivityIndicator />}
        />
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
    paddingTop: 40,
    backgroundColor: Colors.snow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 60,
    width: width,
    backgroundColor: "#ff8080",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  title: {
    color: 'white',
    fontSize: 24
  }
});
