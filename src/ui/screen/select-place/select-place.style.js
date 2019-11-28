import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: white;
  padding: 20px 0px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin: 20px;
  align-self: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #ef6f38;
  font-weight: bold;
  font-size: 20px;
`;

export const ContainerImage = styled.View`
  height: 300;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#ef6f38',
})``;

export const Text = styled.Text``;
