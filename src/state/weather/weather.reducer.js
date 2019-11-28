import {ACTION_GET_LOCATION_SUCCESS} from './weather.action';

const INITIAL_STATE = {
  weatherItem: {},
};

export const WeatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_GET_LOCATION_SUCCESS:
      return {
        ...state,
        weatherItem: action.payload,
      };
    default:
      return state;
  }
};
