import axios from 'axios';

export const getLocation = location =>
  axios.get(
    `https://www.metaweather.com/api/location/search/?query=${location}`,
  );

export const getInformationByWoeId = woeId =>
  axios.get(`https://www.metaweather.com/api/location/${woeId}/`);
