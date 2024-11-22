import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { ScreenProps } from '../types/navigationTypes';

export default function MenuScreen({ navigation }: ScreenProps<'Menu'>) {
  return (
    <View style={styles.container}>
      <Button title="Adicionar Registro" onPress={() => navigation.navigate('AddRecord')} />
      <Button title="Listar Registros" onPress={() => navigation.navigate('ListRecords')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
});

