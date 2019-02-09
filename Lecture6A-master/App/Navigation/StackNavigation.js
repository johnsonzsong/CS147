import { createStackNavigator } from 'react-navigation'

import SampleContentScreen from '../Screens/SampleContentScreen'
import AnotherSampleContentScreen from '../Screens/AnotherSampleContentScreen'
import AbdallahScreen from '../Screens/AbdallahScreen'

const StackNav = createStackNavigator({
  SampleContentScreen: { screen: SampleContentScreen },
  AnotherSampleContentScreen: { screen: AnotherSampleContentScreen },
  AbdallahScreen: { screen: AbdallahScreen }
}, {
  headerMode: 'float',
  initialRouteName: 'SampleContentScreen',

  navigationOptions: ({navigation}) => {

    let navTitle = 'Profiles';
    if (navigation.state.params) {
      navTitle = navigation.state.params.title || navTitle;
    }

    return {
      title: navTitle,
    }
  }
});

export default StackNav;
