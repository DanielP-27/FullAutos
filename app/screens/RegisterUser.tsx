import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import HeaderPag from "../../components/HeaderPag";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation";

type Props = NativeStackScreenProps<RootStackParamList, "RegisterUser">;

export default function RegisterUser({ navigation }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [celular, setCelular] = useState("");
  const [password, setPassword] = useState("");



  const handleLoginScreen = () => {
    navigation.replace("Login");
  };



  return (
    <View style={styles.container}>
      <HeaderPag
        title="Crea una cuenta"
        linkText="¿Ya tienes una cuenta? Inicia sesión"
        onLinkPress={handleLoginScreen}
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
          onChangeText={(text) => {
            // Permite solo números
            const numericText = text.replace(/[^0-9]/g, "");
            setCelular(numericText);
          }}
          style={styles.input}
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={true} // Esto oculta los caracteres
          autoCapitalize="none" // Evita mayúsculas automáticas
          autoCorrect={false} // Desactiva autocorrección
        />

        <Button mode="contained" onPress={handleLoginScreen} style={styles.button}>
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
    marginTop: 80,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    marginBottom: 6,
    color: "#11181C",
  },
  button: { marginTop: 10 },

  linkRegister: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
  },

  textTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
});
