import React from 'react';
import { StyleSheet, Text, View, Image, Button, ActivityIndicator } from 'react-native';
import { Images, Colors, Metrics } from '../Themes';

/*
  Displays a Jedi ID Card
*/
export default class ProfileCard extends React.Component {

  constructor(props){
    super(props);

    //See what props our StarWarsCard renders with
    console.log("Star wars card props " + JSON.stringify(props));
  }

  render() {

    return (
      <View style={styles.card}>

        <View style={styles.pictureView}>
          <Image style={styles.picture}
           source={{uri: this.props.jedi.image}}/>

          <View style={styles.pictureDetails}>
            <Text style={ { fontWeight: 'bold' } }>{this.props.jedi.name}</Text>
            <Text style={ { fontWeight: '500' } }>{this.props.jedi.iceCream}</Text>
            <Text style={ { fontWeight: '500' } }>{this.props.jedi.meme}</Text>
          </View>
        </View>

        </View>
    );
  }

}

const styles = StyleSheet.create({
  card: {
    padding: Metrics.doubleBaseMargin,
    width: Metrics.screenWidth * .9,
    borderWidth: Metrics.borderWidth,
    borderRadius: Metrics.buttonRadius
  },
  pictureView: {
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  picture: {
    height: Metrics.images.large,
    width: Metrics.images.large,
    borderRadius: Metrics.images.large * 0.5
  },
  pictureDetails: {
    flexDirection: 'column',
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
  },
  jediRowItem: {
    marginTop: Metrics.marginVertical,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
