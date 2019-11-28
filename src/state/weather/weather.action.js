const prefix = 'WEATHER';

export const ACTION_GET_LOCATION = `${prefix}.ACTION_GET_LOCATION`;
export function getLocation(location) {
  return {
    type: ACTION_GET_LOCATION,
    payload: location,
  };
}

export const ACTION_GET_LOCATION_FAILURE = `${prefix}.ACTION_GET_LOCATION_FAILURE`;
export function getLocationFailure(error) {
  return {
    type: ACTION_GET_LOCATION_FAILURE,
    payload: error,
  };
}

export const ACTION_GET_LOCATION_SUCCESS = `${prefix}.ACTION_GET_LOCATION_SUCCESS`;
export function getLocationSuccess(obj) {
  return {
    type: ACTION_GET_LOCATION_SUCCESS,
    payload: obj,
  };
}
