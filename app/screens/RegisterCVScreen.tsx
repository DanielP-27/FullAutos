import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { TextInput, Button, Title, Card } from 'react-native-paper';

export default function RegisterCVScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [position, setPosition] = useState('');
  const [cvAttached, setCvAttached] = useState(false);

  const handleAttachCV = () => {
    setCvAttached(true);
  };

  const handleSubmit = () => {
    // Solo visual, no envía realmente
    alert(
      `Nombre: ${name}\nEmail: ${email}\nCiudad: ${city}\nPosición: ${position}\nCV: ${cvAttached ? 'Adjuntado' : 'No adjuntado'}`
    );

    setName('');
    setEmail('');
    setCity('');
    setPosition('');
    setCvAttached(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.mainTitle}>Registrar Hoja de Vida</Title>

      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            label="Nombre"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
          />
          <TextInput
            label="Ciudad"
            value={city}
            onChangeText={setCity}
            style={styles.input}
          />
          <TextInput
            label="Posición"
            value={position}
            onChangeText={setPosition}
            style={styles.input}
          />

          <Button mode="outlined" onPress={handleAttachCV} style={styles.button}>
            Adjuntar CV
          </Button>
          {cvAttached && <Text style={{ marginTop: 5 }}>Archivo seleccionado (simulado)</Text>}

          <Button mode="contained" onPress={handleSubmit} style={styles.button}>
            Enviar
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f4f6f8' },
  mainTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#490e89ff', textAlign: 'center' },
  card: { marginBottom: 15, borderRadius: 10, elevation: 3, padding: 10 },
  input: { marginBottom: 15 },
  button: { marginTop: 10 },
});
