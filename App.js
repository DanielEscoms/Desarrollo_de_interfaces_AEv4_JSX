import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const nombre = nombreCompleto => {
  return <Text>{nombreCompleto}</Text>;
};

const datos = labelText => {
  return (
    <View style={estilo === 'florida' ? styles.florida : styles.upv}>
      <TextInput
        left={<TextInput.Icon name='eye' />}
        label={labelText}
        placeholder='placeholder'
        placeholderTextColor={estilo === 'florida' ? 'white' : 'orange'}
      />
      <TextInput
        left={<TextInput.Icon name='eye' />}
        label={labelText}
        placeholder='placeholder'
        placeholderTextColor={estilo === 'florida' ? 'white' : 'orange'}
      />
    </View>
  );
};

const botonInformes = () =>{
  return (
    <Button
      icon='format-list-bulleted'
      mode='contained'
    >Informes
    </Button>
  );
};

const estilo = 'florida';
const isAdmin = true;

class App extends Component {
  render() {
    return (
      <>
        {nombre('Daniel Escoms Donate')}
        {datos('Introduce tus datos')}
        {isAdmin ? botonInformes() : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
