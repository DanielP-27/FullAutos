import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation';
import PanelSuperior from '@/components/panelSuperior';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {


  return (
    <View style={styles.container}>
      <PanelSuperior
        title="¡HOLA!"
        subtitle="Hola, Usuario"
      />

      <Button mode="contained" onPress={() => navigation.navigate('About')} style={styles.button}>
        Acerca de la Empresa
      </Button>

      <Button mode="contained" onPress={() => navigation.navigate('Services')} style={styles.button}>
        Servicios
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Technicians')} style={styles.button}>
        Técnicos
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('RegisterCV')} style={styles.button}>
        Registrar CV
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f4f6f8' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#490e89ff' },
  button: { marginBottom: 15 },
});
