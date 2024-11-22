// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { login } from '../services/api';
import { ScreenProps } from '../types/navigationTypes';

export default function LoginScreen({ navigation }: ScreenProps<'Login'>) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      await login(username, password);
      navigation.navigate('Home');
    } catch {
      setErrorMessage('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Usuário"
        style={styles.input}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />
      <Button title="Entrar" onPress={handleLogin} />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { marginBottom: 10, borderWidth: 1, borderColor: '#ccc', padding: 10 },
  error: { color: 'red', marginTop: 10 },
});
