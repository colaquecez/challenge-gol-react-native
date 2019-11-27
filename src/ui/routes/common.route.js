import {SelectPlaceScreen} from '../screen';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const App = createStackNavigator({
  Home: SelectPlaceScreen,
});

export default createAppContainer(App);
