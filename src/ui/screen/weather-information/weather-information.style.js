import styled from 'styled-components/native';
import {FlatList} from 'react-native';
export const Container = styled.SafeAreaView`
  background: #e0e0e0;
  flex: 1;
  justify-content: space-between;
`;

export const ListWeather = styled(FlatList)`
  padding: 20px;
`;
