import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Images } from '../Themes';
import { FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';

export default class ActionBar extends React.Component {
  render() {
    return (
      <View style={styles.actionBar}>
        <TouchableOpacity onPress={() => {
          this.props.randomProfile();
          alert('LIKE')
        }}>
          <View style={styles.smallImageWrapper}>
            <Feather
              style = {styles.smallImage}
              size = {20}
              name = "rewind"
              color = '#f4d941'
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          this.props.randomProfile();
          alert('DISLIKE')
        }}>
          <View style={styles.bigImageWrapper}>
            <MaterialIcons
              style = {styles.bigImage}
              size = {25}
              name = "do-not-disturb"
              color = 'red'
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          this.props.randomProfile();
          alert('LIKE')
        }}>
          <View style={styles.smallImageWrapper}>
            <Feather
              style = {styles.smallImage}
              size = {20}
              name = "cloud-lightning"
              color = '#9a41f4'
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          this.props.randomProfile();
          alert('LIKE')
        }}>
          <View style={styles.bigImageWrapper}>
            <FontAwesome
              style = {styles.bigImage}
              size = {25}
              name = "heart"
              color = '#85db8a'
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          this.props.randomProfile();
          alert('SUPERLIKE')
        }}>
          <View style={styles.smallImageWrapper}>
            <FontAwesome
              style = {styles.smallImage}
              size = {25}
              name = "star"
              color = '#4fc1ff'
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionBar: {
    width: '75%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  smallImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20
  },
  bigImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25
  },
  smallImage: {
    width: 22,
    height: 22
  },
  bigImage: {
    width: 25,
    height: 25
  }
});
