// src/screens/AddRecordScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { addRecord } from '../services/api';
import { ScreenProps } from '../types/navigationTypes';

export default function AddRecordScreen({ navigation }: ScreenProps<'AddRecord'>) {
  const [usage, setUsage] = useState('');

  const handleAdd = async () => {
    await addRecord({
      title: 'Uso de Energia',
      description: 'Novo registro',
      date: new Date().toISOString(),
      usage,
    });
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Consumo em kWh"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setUsage}
      />
      <Button title="Adicionar" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { marginBottom: 10, borderWidth: 1, borderColor: '#ccc', padding: 10 },
});
