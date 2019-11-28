import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import MapView from 'react-native-maps';

export const Container = styled.SafeAreaView`
  background: white;
  flex: 1;
  justify-content: space-between;
`;

export const Header = styled.View`
  align-items: center;
`;

export const TextHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 7px;
  margin-bottom: 10px;
`;

export const ListWeather = styled(FlatList)`
  padding: 20px;
  height: 170px;
`;

export const WeatherMap = styled(MapView)`
  height: 180;
  justify-content: flex-end;
  align-items: center;
`;

export const ContainerList = styled.View``;

export const ContainerSwitch = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 20px;
`;

export const TextWeather = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
