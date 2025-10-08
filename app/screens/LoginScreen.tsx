import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import HeaderAuth from "../../components/HeaderAuth";
import { RootStackParamList } from "../Navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    Alert.alert("Login", `Email: ${email}\nContraseña: ${password}`);
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <HeaderAuth
        title="¡HOLA!"
        subtitle="Ingresa tu correo y contraseña para continuar"
      />

      <View style={styles.formContainer}>
        <Text style={styles.textTitle}>Inicia sesión</Text>
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
        <Text style={styles.text}>Olvidaste tu contraseña</Text>
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Inicia sesión
        </Button>
        <Button onPress={() => Alert.alert("Crear cuenta")} style={styles.link}>
          ¿Todavía no tienes una cuenta? Regístrate
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
    marginTop: 80,
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
