import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text,  View } from 'react-native';
import { TextInput, Button,} from 'react-native-paper';
import HeaderPag from "../../components/HeaderPag";

export default function RegisterCVScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [celular, setCelular] = useState('');
  const [cvAttached, setCvAttached] = useState(false);

  const handleAttachCV = () => {
    setCvAttached(true);
  };

  const handleSubmit = () => {
    // Solo visual, no envía realmente
    alert(
      `Nombre: ${name}\nEmail: ${email}\nCiudad: ${city}\nCelular: ${celular}\nCV: ${cvAttached ? 'Adjuntado' : 'No adjuntado'}`
    );

    setName('');
    setEmail('');
    setCity('');
    setCelular('');
    setCvAttached(false);
  };

  return (
  <View style={styles.container}>
      <HeaderPag
        title="Crea una cuenta"
        subtitle="¿Ya tienes una cuenta? Inicia sesión"
      />

      <View style={styles.formContainer}>
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
            label="Celular"
            keyboardType="numeric"
            maxLength={10}
            value={celular}
            onChangeText={setCelular}
            style={styles.input}
          />

          <Button mode="outlined" onPress={handleAttachCV} style={styles.button}>
            Adjuntar CV
          </Button>
          {cvAttached && <Text style={{ marginTop: 5 }}>Archivo seleccionado (simulado)</Text>}

          <Button mode="contained" onPress={handleSubmit} style={styles.button}>
            Enviar
          </Button>
        </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f4f6f8",
  },
  formContainer: {
    width: "100%",
    padding: 5,
    elevation: 5,
    marginTop: 160,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    marginBottom:6,
    color: "#11181C",
  },
  button: { marginTop: 10 },
  link: { marginTop: 5 },
  textTitle: {
    // 👈 agrega esto
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  text: {
    // 👈 agrega esto
    fontSize: 16,
    fontWeight: "regular",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
});
