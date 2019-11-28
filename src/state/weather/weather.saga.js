import {put, takeLatest, call} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {
  ACTION_GET_LOCATION,
  getLocationSuccess,
  loading,
} from './weather.action';

import NavigationService from '../../ui/routes/navigation-manager';

import * as LocationService from '../../services/locationService';

function* getMyLocation(location) {
  yield put(loading(true));
  try {
    const response = yield call(LocationService.getLocation, location.payload);
    if (response.data) {
      const _whoeId = yield call(
        LocationService.getInformationByWoeId,
        response.data[0].woeid,
      );
      yield put(getLocationSuccess(_whoeId.data));
      NavigationService.navigate('Detail');
    }
  } catch (e) {
    Alert.alert('Not Found', 'City not found :( try again');
  } finally {
    yield put(loading(false));
  }
}

function* WeatherSaga() {
  yield takeLatest(ACTION_GET_LOCATION, getMyLocation);
}

export default WeatherSaga;
