import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { updateRecord, fetchRecords } from '../services/api';
import { ScreenProps } from '../types/navigationTypes';

export default function EditRecordScreen({ navigation, route }: ScreenProps<'EditRecord'>) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const { id } = route.params;

  useEffect(() => {
    const loadRecord = async () => {
      const records = await fetchRecords();
      const record = records.data.find((r: any) => r.id === id);
      if (record) {
        setTitle(record.title);
        setDescription(record.description);
        setDate(record.date);
      }
    };

    loadRecord();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await updateRecord(id, { title, description, date });
      navigation.navigate('ListRecords');
    } catch (error) {
      console.error('Erro ao atualizar registro:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Título"
        style={styles.input}
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        placeholder="Descrição"
        style={styles.input}
        onChangeText={setDescription}
        value={description}
      />
      <TextInput
        placeholder="Data (YYYY-MM-DD)"
        style={styles.input}
        onChangeText={setDate}
        value={date}
      />
      <Button title="Atualizar" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { marginBottom: 10, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5 },
});
