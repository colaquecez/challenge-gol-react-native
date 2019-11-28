import {ACTION_GET_LOCATION_SUCCESS, ACTION_LOADING} from './weather.action';

const INITIAL_STATE = {
  weatherItem: {},
  loading: false,
};

export const WeatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_GET_LOCATION_SUCCESS:
      return {
        ...state,
        weatherItem: action.payload,
      };

    case ACTION_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
