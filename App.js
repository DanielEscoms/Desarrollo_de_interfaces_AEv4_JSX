import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

const nombre = nombreCompleto => {
  return <Text>{nombreCompleto}</Text>;
};

const datos = labelText => {
  return (
    <View>
      <TextInput left={<TextInput.Icon name='eye' />} label={labelText} />
      <TextInput></TextInput>
    </View>
  );
};

class App extends Component {
  render() {
    return (
      <>
        {nombre('Daniel Escoms Donate')}
        {datos('Introduce tus datos')}
      </>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 4,
    borderColor: 'purple',
    borderWidth: 5,
  },
});

export default App;
