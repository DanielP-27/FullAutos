import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Linking, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Divider, PaperProvider, Text } from 'react-native-paper';
import { RootStackParamList } from '../Navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Contact'>;

export default function ContactScreen({ navigation }: Props) {
  const { colors } = useTheme();

  const handleEmailPress = () => {
    Linking.openURL('mailto:full_autos@mail.com');
  };

  const handleLocationPress = () => {
    // Aquí puedes agregar la funcionalidad para abrir maps o dirección
    alert('Funcionalidad de ubicación');
  };

  return (
    <PaperProvider>
      <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
        <Text variant="headlineMedium" style={styles.title}>
          Contacto
        </Text>

        {/* Información de contacto */}
        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.boldText}>
            Teléfono
          </Text>
          <Text variant="bodyMedium" style={styles.contactInfo}>
            123-456-7890
          </Text>

          <Text variant="titleMedium" style={[styles.boldText, styles.marginTop]}>
            Correo Electrónico
          </Text>
          <Button 
            mode="text" 
            onPress={handleEmailPress}
            style={styles.emailButton}
          >
            full_autos@mail.com
          </Button>
        </View>

        <Divider style={styles.divider} />

        {/* Horario de atención */}
        <View style={styles.section}>
          <Text variant="titleLarge" style={styles.sectionTitle}>
            Horario de Atención
          </Text>
          <Text variant="bodyMedium" style={styles.schedule}>
            Lunes a Viernes: 8:00 - 18:00{"\n"}
            Sábado: 8:00 - 13:00{"\n"}
            Domingo: No tenemos servicio
          </Text>
        </View>

        <Divider style={styles.divider} />

        {/* Ubicación */}
        <View style={styles.section}>
          <Text variant="titleLarge" style={styles.sectionTitle}>
            Ubicación
          </Text>
          
          <View style={styles.locationButtons}>
            <Button 
              mode="outlined" 
              onPress={handleLocationPress}
              style={styles.locationButton}
              contentStyle={styles.buttonContent}
            >
              Dirección 1
            </Button>
            
            <Button 
              mode="outlined" 
              onPress={handleLocationPress}
              style={styles.locationButton}
              contentStyle={styles.buttonContent}
            >
              Dirección 2
            </Button>
            
            <Button 
              mode="outlined" 
              onPress={handleLocationPress}
              style={styles.locationButton}
              contentStyle={styles.buttonContent}
            >
              Dirección 3
            </Button>
          </View>
        </View>

        <View style={styles.navbarPlaceholder} />
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 12,
    fontWeight: 'bold',
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  contactInfo: {
    marginBottom: 12,
  },
  emailButton: {
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  marginTop: {
    marginTop: 12,
  },
  schedule: {
    lineHeight: 24,
  },
  divider: {
    marginVertical: 20,
  },
  locationButtons: {
    gap: 12,
  },
  locationButton: {
    borderWidth: 1,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  navbarPlaceholder: {
    height: 60,
  },
});