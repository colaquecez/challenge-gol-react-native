import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron, {asyncStorage} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

import {WeatherReducer, WeatherSaga} from './weather';

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
  weather: WeatherReducer,
});

const tron = Reactotron.configure() // controls connection & communication settings
  .useReactNative(asyncStorage()) // add all built-in react native plugins
  .use(reactotronRedux())
  .connect();

export default createStore(
  rootReducers,
  compose(applyMiddleware(sagaMiddleware), tron.createEnhancer()),
);

sagaMiddleware.run(WeatherSaga);
