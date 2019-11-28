/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import {NavigationService, Routes} from './src/ui/routes/';
import {Provider} from 'react-redux';
import Store from './src/state/store';

const RenderApp = () => (
  <Provider store={Store}>
    <Routes ref={navigator => NavigationService.setContainer(navigator)} />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RenderApp);
