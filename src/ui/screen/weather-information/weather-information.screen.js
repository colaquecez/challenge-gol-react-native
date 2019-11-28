import React, {useState} from 'react';
import {Switch} from 'react-native';
import {useSelector} from 'react-redux';
import {
  Container,
  ListWeather,
  Header,
  TextHeader,
  ContainerSwitch,
  ContainerList,
  TextWeather,
  WeatherMap,
} from './weather-information.style';
import {
  ListWeatherComponent,
  formatToFahrenheit,
  fixNumber,
} from '../../components/';
import {PROVIDER_GOOGLE} from 'react-native-maps';

export default function WeatherInformationScreen() {
  const [fire, setFire] = useState(false);
  const weatherItem = useSelector(state => state.weather.weatherItem);

  const _renderItem = ({item}) => (
    <ListWeatherComponent item={item} fire={fire} />
  );

  const lat = weatherItem.latt_long.substring(0, 9);
  const long = weatherItem.latt_long.substring(11, 20);

  return (
    <Container>
      <Header>
        <TextHeader>{weatherItem.title}</TextHeader>
        <TextHeader>
          {fire
            ? `${fixNumber(
                formatToFahrenheit(
                  weatherItem.consolidated_weather[0].the_temp,
                ),
              )} ºF`
            : `${fixNumber(weatherItem.consolidated_weather[0].the_temp)} ºC`}
        </TextHeader>
      </Header>

      <WeatherMap
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: Number(lat),
          longitude: Number(long),
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></WeatherMap>

      <ContainerList>
        <ListWeather
          data={weatherItem.consolidated_weather}
          keyExtractor={item => String(item.id)}
          renderItem={_renderItem}
        />
      </ContainerList>
      <ContainerSwitch>
        <TextWeather style={{paddingRight: 10}}>Celsius </TextWeather>
        <Switch
          thumbColor="#ef6f38"
          value={fire}
          onValueChange={item => setFire(item)}
        />
        <TextWeather style={{paddingLeft: 10}}>Fahrenheit </TextWeather>
      </ContainerSwitch>
    </Container>
  );
}
