import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
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

const botonInformes = () => {
  return (
    <Button
      icon='format-list-bulleted'
      mode='contained'
    >Informes
    </Button>
  );
};

const estilo = 'florida';
const isAdmin = false;
const modulos2Dam = [
  {nombre: 'DIN', profesor: 'Manel', horas: 120},
  {nombre: 'ADA', profesor: 'Juanmi', horas: 120},
  {nombre: 'PMDM', profesor: 'Fran', horas: 100},
  {nombre: 'PSP', profesor: 'Fran', horas: 60},
  {nombre: 'SGE', profesor: 'Belén', horas: 100},
  {nombre: 'Inglés', profesor: 'Caterina', horas: 40},
  {nombre: 'EIE', profesor: 'Manuel', horas: 60},
];

class App extends Component {
  render() {
    return (
      <>
        {nombre('Daniel Escoms Donate')}
        {datos('Introduce tus datos')}
        {isAdmin ? botonInformes() : null}
        <ScrollView>
          {modulos2Dam.map((item, pos) => {
            return (
              <View
                key={item.nombre}
                style={pos % 2 === 0 ? styles.fuerte : styles.tenue}>
                <Text>{pos + 1}</Text>
                <Text>{item.nombre}</Text>
                <Text>{item.profesor}</Text>
                <Text>{item.horas} horas</Text>
              </View>
            );
          })}
        </ScrollView>
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
  fuerte: {
    backgroundColor: '#F48FB1',
  },
  tenue: {
    backgroundColor: '#F8BBD0',
  },
});

export default App;
