import {SelectPlaceScreen, WeatherInformationScreen} from '../screen';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const App = createStackNavigator({
  Home: {
    screen: SelectPlaceScreen,
    navigationOptions: {
      header: null,
    },
  },
  Detail: WeatherInformationScreen,
});

export default createAppContainer(App);
