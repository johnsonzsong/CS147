import React, { Component } from "react";
import { StyleSheet, View, Text, PanResponder, Animated, SafeAreaView } from "react-native";
import DragAnchor from "./App/DragAnchor";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.dropZone}>
          <Text style={styles.text}>Drop them here!</Text>
        </View>
        <View style={styles.ballContainer} />
        <View style={styles.row}>
          <DragAnchor />
          <DragAnchor />
          <DragAnchor />
          <DragAnchor />
          <DragAnchor />
        </View>
      </SafeAreaView>
    );
  }
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    height:200
  },
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },
  row: {
    flexDirection: "row"
  },
  dropZone: {
    height: 200,
    backgroundColor: "#00334d"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  }
});
