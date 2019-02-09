import { createDrawerNavigator } from 'react-navigation'

import { Colors } from '../Themes'
import SampleDrawerScreen from '../Screens/SampleDrawerScreen'
import SampleSettingsScreen from '../Screens/SampleSettingsScreen'
import StarWarsScreen from '../Screens/StarWarsScreen'

const DrawerNav = createDrawerNavigator({
  SampleDrawerScreen: { screen: SampleDrawerScreen },
  SampleSettingsScreen: { screen: SampleSettingsScreen },
  StarWarsScreen: { screen: StarWarsScreen },
}, {

});

export default DrawerNav;
