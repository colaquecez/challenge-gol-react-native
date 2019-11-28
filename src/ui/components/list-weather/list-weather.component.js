import React from 'react';
import moment from 'moment';

import {Container, IconWeather, TextWeather} from './list-weather.style';

export default function ListWeatherComponent({item, fire}) {
  return (
    <Container>
      <TextWeather>{fomartDate(item.applicable_date)}</TextWeather>
      <TextWeather>
        {fire
          ? `${fixNumber(formatToFahrenheit(item.the_temp))} ºF`
          : `${fixNumber(item.the_temp)} ºC`}
      </TextWeather>
      <IconWeather
        source={{
          uri: `https://www.metaweather.com/static/img/weather/png/${item.weather_state_abbr}.png`,
        }}
      />
    </Container>
  );
}

export function formatToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

export function fixNumber(number) {
  return number.toFixed(0);
}

function fomartDate(date) {
  return moment(date).format('DD/MM');
}
