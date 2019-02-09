// SwipeCards.js
'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Colors, Images, Metrics, Profiles } from '../Themes';
import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.profileImage} source={this.props.image}/>

        <View style={styles.profileText}>
          <Text style={{fontSize: 24}}> <Text style={{fontWeight: 'bold'}}>{this.props.name},</Text> {this.props.age} </Text>
          <Text style={{fontSize: 16, color: Colors.tint}}> {this.props.occupation} </Text>
        </View>
      </View>
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more profiles!</Text>
      </View>
    )
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Profiles.list
    };
  }

  handleYup (card) {
    console.log(`Yup for ${card.name}`)
  }
  handleNope (card) {
    console.log(`Nope for ${card.name}`)
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: 300,
    // height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
  },
  profileCard: {
    flex: 2,
    justifyContent: 'center',
  },
  profileImage: {
    borderWidth: Metrics.borderWidth,
    borderColor: Colors.tint,
    marginLeft: Metrics.doubleBaseMargin,
    marginRight: Metrics.doubleBaseMargin,
    width: .9 * Metrics.screenWidth,
    height: .9 * Metrics.screenWidth
  },
  profileText: {
    backgroundColor: Colors.white,
    borderLeftWidth: Metrics.borderWidth,
    borderLeftColor: Colors.tint,
    borderRightWidth: Metrics.borderWidth,
    borderRightColor: Colors.tint,
    borderBottomWidth: Metrics.borderWidth,
    borderBottomColor: Colors.tint,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: Metrics.doubleBaseMargin,
    marginRight: Metrics.doubleBaseMargin,
    height: 70,
    paddingTop: 10,
    paddingLeft: 10,
    width: .9 * Metrics.screenWidth,
  }
})
