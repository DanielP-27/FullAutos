import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Title, Text, Card } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login', `Email: ${email}\nContraseña: ${password}`);
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.logo}>Full Autos SAS</Title>
      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            label="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Entrar
          </Button>
          <Button onPress={() => Alert.alert('Crear cuenta')} style={styles.link}>
            Crear cuenta
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f4f6f8' },
  logo: { fontSize: 32, marginBottom: 30, color: '#490e89ff', textAlign: 'center' },
  card: { width: '100%', borderRadius: 12, padding: 25, elevation: 5 },
  input: { marginBottom: 15 },
  button: { marginTop: 10 },
  link: { marginTop: 5 },
});
