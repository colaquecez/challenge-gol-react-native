/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import {NavigationService, Routes} from './src/ui/routes/';

const RenderApp = () => (
  <Routes ref={navigator => NavigationService.setContainer(navigator)} />
);

AppRegistry.registerComponent(appName, () => RenderApp);
