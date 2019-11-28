import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  Button,
  ButtonText,
  Loading,
  ContainerImage,
} from './select-place.style';
import {getLocation} from '../../../state/weather/weather.action';

export default function SelectPlaceScreen() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.weather.loading);

  const [city, setCity] = useState('');

  const items = [
    {label: 'São Paulo', value: 'paulo'},
    {label: 'Rio de Janeiro', value: 'jan'},
    {label: 'San Francisco', value: 'san'},
  ];

  const placeHolder = {
    label: 'Select a City...',
    value: null,
  };

  function selectCity() {
    dispatch(getLocation(city));
  }

  return (
    <Container>
      <ContainerImage>
        <Image source={require('../../../../assets/gol_logo.png')} />
      </ContainerImage>

      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={value => setCity(value)}
        items={items}
        placeholder={placeHolder}
      />

      <Button onPress={selectCity}>
        {loading ? <Loading /> : <ButtonText>Search</ButtonText>}
      </Button>
    </Container>
  );
}

//The library only accepts this style import mode. :( but ok it works very well :)
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    paddingVertical: 15,
    textAlign: 'center',
    borderRadius: 4,
    color: 'white',
    fontWeight: 'bold',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#ef6f38',
  },

  inputAndroid: {
    fontSize: 20,
    borderRadius: 20,
    color: 'white',
    fontWeight: 'bold',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#ef6f38',
  },
});
