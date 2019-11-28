import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import reactotron from 'reactotron-react-native';
import RNPickerSelect from 'react-native-picker-select';
import {useDispatch} from 'react-redux';
import {Container, Button, ButtonText, Text} from './select-place.style';
import {getLocation} from '../../../state/weather/weather.action';

export default function SelectPlaceScreen() {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const items = [
    {label: 'São Paulo', value: 'paulo'},
    {label: 'Rio de Janeiro', value: 'jan'},
    {label: 'São Francisco', value: 'san'},
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
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={value => setCity(value)}
        items={items}
        placeholder={placeHolder}
      />

      <Button onPress={selectCity}>
        <ButtonText>Search</ButtonText>
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
});
