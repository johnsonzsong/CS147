import { createBottomTabNavigator } from 'react-navigation'

import { Colors } from '../Themes'
import SampleContentScreen from '../Screens/SampleContentScreen'
import SampleSettingsScreen from '../Screens/SampleSettingsScreen'

const TabNav = createBottomTabNavigator({
  First: { screen: SampleContentScreen },
  Second: { screen: SampleSettingsScreen },
}, {
  tabBarOptions: {
    activeTintColor: Colors.ember
  }
});

export default TabNav;
