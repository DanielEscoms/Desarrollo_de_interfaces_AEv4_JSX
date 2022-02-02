import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const nombre = nombreCompleto => {
  return <Text>{nombreCompleto}</Text>;
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
