// src/screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { fetchRecords } from '../services/api';
import { ScreenProps } from '../types/navigationTypes';

export default function HomeScreen({ navigation }: ScreenProps<'Home'>) {
  const [usageData, setUsageData] = useState<number>(0);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetchRecords();
      const totalUsage = response.data.reduce((sum: number, record: any) => sum + parseFloat(record.usage || 0), 0);
      setUsageData(totalUsage);
      generateSuggestions(totalUsage);
    };

    loadData();
  }, []);

  const generateSuggestions = (usage: number) => {
    const suggestionsList = [];
    if (usage > 1000) {
      suggestionsList.push('Desligue os aparelhos em standby.');
      suggestionsList.push('Troque lâmpadas incandescentes por LED.');
    } else {
      suggestionsList.push('Continue mantendo hábitos sustentáveis!');
    }
    setSuggestions(suggestionsList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Uso Atual de Energia</Text>
      <Text style={styles.usage}>{usageData} kWh</Text>
      <Text style={styles.title}>Sugestões de Economia</Text>
      {suggestions.map((suggestion, index) => (
        <Text key={index} style={styles.suggestion}>
          • {suggestion}
        </Text>
      ))}
      <Button title="Adicionar Registro" onPress={() => navigation.navigate('AddRecord')} />
      <Button title="Ver Registros" onPress={() => navigation.navigate('ListRecords')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  usage: { fontSize: 24, color: 'green', marginVertical: 10 },
  suggestion: { marginVertical: 5, fontSize: 16 },
});
