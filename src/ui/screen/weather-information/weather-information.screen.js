import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import reactotron from 'reactotron-react-native';
import {Container, ListWeather} from './weather-information.style';
import {ListWeatherComponent} from '../../components/';

export default function WeatherInformationScreen() {
  const [fire, setFire] = useState(false);
  const weatherItem = useSelector(state => state.weather.weatherItem);
  reactotron.log(weatherItem);

  const _renderItem = ({item}) => (
    <ListWeatherComponent item={item} fire={fire} />
  );

  return (
    <Container>
      <Text>Nome da Cidade</Text>

      <View>
        <ListWeather
          data={weatherItem.consolidated_weather}
          keyExtractor={item => item.id}
          renderItem={_renderItem}
        />
      </View>

      <TouchableOpacity onPress={() => setFire(!fire)}>
        <Text>Celsius/ Fahrenheit</Text>
      </TouchableOpacity>
    </Container>
  );
}
