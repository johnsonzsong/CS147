import { createStackNavigator } from 'react-navigation'

import SampleContentScreen from '../Screens/SampleContentScreen'

const StackNav = createStackNavigator({
  SampleContentScreen: { screen: SampleContentScreen },
  SampleScreen: { screen: SampleContentScreen },
}, {
  headerMode: 'float',
  initialRouteName: 'SampleContentScreen',

  navigationOptions: ({navigation}) => {

    let navTitle = 'Sample Content';
    if (navigation.state.params) {
      navTitle = navigation.state.params.title || navTitle;
    }

    return {
      title: navTitle,
    }
  }
});

export default StackNav;
