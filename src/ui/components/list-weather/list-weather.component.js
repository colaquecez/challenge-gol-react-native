import React from 'react';
import moment from 'moment';

import {Container, IconWeather, TextWeather} from './list-weather.style';

export default function ListWeatherComponent({item, fire}) {
  return (
    <Container>
      <TextWeather>{fomartDate(item.applicable_date)}</TextWeather>
      <TextWeather>
        Min:{' '}
        {fire
          ? `${fixNumber(formatToFahrenheit(item.min_temp))} ºF`
          : `${fixNumber(item.min_temp)} ºC`
          }
      </TextWeather>
      <TextWeather>
        Max:{' '}
        {fire
          ? `${fixNumber(formatToFahrenheit(item.max_temp))} ºF`
          : `  ${fixNumber(item.max_temp)} ºC`}
      </TextWeather>
      <IconWeather
        source={{
          uri: `https://www.metaweather.com/static/img/weather/png/${item.weather_state_abbr}.png`,
        }}
      />
    </Container>
  );
}

function formatToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

function fixNumber(number) {
  return number.toFixed(0);
}

function fomartDate(date) {
  return moment(date).format('DD/MM');
}
