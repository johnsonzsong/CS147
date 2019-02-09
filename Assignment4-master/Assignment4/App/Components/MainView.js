import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
  Dimensions,
  PanResponder,
  Animated
} from 'react-native';
import { Card } from 'react-native-elements'

const {height, width} = Dimensions.get('window');
const SWIPE_THRESHOLD = 150;

export default class MainView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(0),
      enter: new Animated.Value(0.5),
    };

    this._val = {x:0, y:0}
    this.state.pan.addListener((value) => this._val = value);

    this.cardAnimation = null;

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: (e,gesture) => {
        this.state.pan.setOffset({
          x: this._val.x,
          y: this._val.y,
        })
        this.state.pan.setValue({x:0, y:0})
      },
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y },
      ]),
      onPanResponderRelease: (e, gesture) => {
        this.state.pan.flattenOffset();
        const hasSwipedHorizontally = Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD
        const hasSwipedVertically = Math.abs(this.state.pan.y._value) > SWIPE_THRESHOLD
        if (hasSwipedHorizontally || hasSwipedVertically) {
          let cancelled = false;

          const hasMovedRight = hasSwipedHorizontally && this.state.pan.x._value > 0
          const hasMovedLeft = hasSwipedHorizontally && this.state.pan.x._value < 0
          const hasMovedUp = hasSwipedVertically && this.state.pan.y._value < 0

          if (hasMovedUp) {
            this.cardAnimation = Animated.timing(this.state.pan, {
              toValue: {x: gesture.moveX, y: -height},
              duration: 500
            });
            alert('SUPERLIKE')
          } else if (hasMovedRight) {
            this.cardAnimation = Animated.timing(this.state.pan, {
              toValue: {x: width, y: gesture.moveY},
              duration: 300
            });
            alert('LIKE')
          } else if (hasMovedLeft) {
            this.cardAnimation = Animated.timing(this.state.pan, {
              toValue: {x: -width, y: gesture.moveY},
              duration: 300
            });
            alert('DISLIKE')
          } else {
            this.resetPan();
            return;
          }
          this.cardAnimation.start(status => {
            if (status.finished) {
              this.state.pan.setValue({ x: 0, y: 0 });
              this.state.enter.setValue(0);
              this.props.randomProfile();
            }
            this.cardAnimation = null;
          });
        }
        else {
          this.resetPan();
        }
      }
    });
  }

  resetPan() {
    Animated.spring(this.state.pan, {
      toValue: { x: 0, y: 0 },
      friction: 4
    }).start();
  }

  render() {
    const panStyle= { transform: this.state.pan.getTranslateTransform() }

    return(
      <View style={styles.mainView}>
        <Animated.View {...this.panResponder.panHandlers} style={[panStyle]}>
          <Card containerStyle={styles.cardOuter}>
          {
            <View style={styles.card}>
              <Image source={this.props.profileImage} style={styles.profileImage} />
              <View style={styles.nameAndAge}>
                <Text style={styles.name}>
                  {this.props.name + ", "}
                </Text>
                <Text style={styles.age}>
                  {this.props.age}
                </Text>
              </View>
              <Text style={styles.occupation}>
                {this.props.occupation}
              </Text>
            </View>
          }
          </Card>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOuter: {
    backgroundColor: '#f0f0f0',
    borderColor: '#f0f0f0',
    borderWidth: 0
  },
  card: {
    width: 0.9 * width,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#A5A5A5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  profileImage: {
    width: '100%',
    height: 0.9 * width,
    borderTopLeftRadius: 10
  },
  nameAndAge: {
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 16,
  },
  occupation: {
    marginLeft: 16,
    marginBottom: 8,
    fontSize: 16,
    color: '#A5A5A5',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  age: {
    fontSize: 24,
  },
});
