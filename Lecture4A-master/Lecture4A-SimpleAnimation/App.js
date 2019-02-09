import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
export default class App extends React.Component {
  state = {
    top: new Animated.Value((height-500)/2),
    hidden: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.card, {top: this.state.top}]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Animated.spring(this.state.top,
                {
                  toValue: height-100,
                }
              ).start();
              this.setState({hidden: true});
            }}>
            <Text style={styles.text}> Put me down! </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    position: 'absolute',
    height: 500,
    width: '80%',
    borderRadius: 16,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 24
  },
  button: {
    backgroundColor: 'rgb(89,140,238)',
    padding: 16,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 22
  }
});
