import {put, takeLatest, call} from 'redux-saga/effects';

import {ACTION_GET_LOCATION, getLocationSuccess} from './weather.action';

import NavigationService from '../../ui/routes/navigation-manager';

import * as LocationService from '../../services/locationService';

function* getMyLocation(location) {
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
  } catch (e) {}
}

function* WeatherSaga() {
  yield takeLatest(ACTION_GET_LOCATION, getMyLocation);
}

export default WeatherSaga;
