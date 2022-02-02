import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';

const nombre = nombreCompleto => {
  return <Text>{nombreCompleto}</Text>;
};

const datos = () => {
  return <TextInput></TextInput>;
};

class App extends Component {
  render() {
    return <>{nombre('Daniel Escoms Donate')}</>;
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
