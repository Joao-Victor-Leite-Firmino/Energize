// src/screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { ScreenProps } from '../types/navigationTypes';
import { api } from '../services/api';  // Certifique-se de que o `api` está correto e configurado

export default function RegisterScreen({ navigation }: ScreenProps<'Register'>) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    console.log('Botão de registrar pressionado'); // Debug
    if (!username || !password || !confirmPassword) {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    setLoading(true); // Ativando o carregando

    try {
      // Realizando a requisição ao backend para registrar o usuário
      const response = await api.post('/users/register', { username, password });
      
      // Se o registro for bem-sucedido
      if (response.status === 201) {
        Alert.alert('Sucesso', 'Conta criada com sucesso!');
        navigation.navigate('Login');  // Navega para a tela de login
      }
    } catch (error) {
      // Se ocorrer algum erro
      console.error('Erro ao registrar:', error);
      Alert.alert('Erro', 'Não foi possível registrar. Tente novamente.');
    } finally {
      setLoading(false); // Desativando o carregando
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        placeholder="Nome de usuário"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Confirmar Senha"
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Button title="Registrar" onPress={handleRegister} />
          <Button
            title="Já tem uma conta? Faça login"
            onPress={() => navigation.navigate('Login')}
            color="#666"
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { marginBottom: 10, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5 },
});
