import PanelSuperior from '@/components/PanelSuperior';
import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, View } from 'react-native';
import { Button, PaperProvider, Text } from 'react-native-paper';
import { RootStackParamList } from '../Navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Contact'>;

export default function ContactScreen() {
  const { colors } = useTheme();

  const handleEmailPress = () => {
    Linking.openURL('mailto:full_autos@mail.com');
  };

 const handlePhonePress = () => {
    Linking.openURL('tel:123-456-7890');
  };

  const handleLocationPress = () => {
    Linking.openURL('https://maps.google.com/?q=Carrera+15+No+45+-+20+Bogotá');
  };

  const handleSocialPress = (platform: string) => {
    console.log(`Abriendo ${platform}`);
  };

   return (
    <PaperProvider>
      <PanelSuperior
        title="Contacto"
        onNotificationPress={() => console.log("Notificaciones")}
        notificationCount={3}
      />
      
      <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
        
        {/* Tarjeta blanca de contacto */}
        <View style={[styles.contactCard, { backgroundColor: '#FFFFFF' }]}>
          
          {/* Teléfono y Correo Electrónico */}
          <View style={styles.contactGroup}>
            <View style={styles.infoRow}>
              <View style={styles.infoColumn}>
                <Text variant="labelSmall" style={styles.label}>
                  Teléfono
                </Text>
                <Button 
                  mode="text" 
                  onPress={handlePhonePress}
                  style={styles.contactButton}
                  labelStyle={styles.contactButtonLabel}
                >
                  123-456-7890
                </Button>
              </View>
              
              <View style={styles.infoColumn}>
                <Text variant="labelSmall" style={styles.label}>
                  Correo Electrónico
                </Text>
                <Button 
                  mode="text" 
                  onPress={handleEmailPress}
                  style={styles.contactButton}
                  labelStyle={styles.contactButtonLabel}
                >
                  full_autos@mail.com
                </Button>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Horario de Atención */}
          <View style={styles.scheduleSection}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Horario de Atención
            </Text>
            <Text variant="bodyMedium" style={styles.scheduleText}>
              Lunes a Viernes: 8:00 - 18:00
            </Text>
            <Text variant="bodyMedium" style={styles.scheduleText}>
              Sábado: 8:00 - 13:00
            </Text>
            <Text variant="bodyMedium" style={styles.scheduleTextBold}>
              Domingo: No tenemos servicio
            </Text>
          </View>

          <View style={styles.divider} />

          {/* Ubicación */}
          <View style={styles.locationSection}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Ubicación
            </Text>
            
            {/* Mapa simulado con imagen */}
            <View style={styles.mapContainer}>
               <Image
                 source={require('../../assets/images/ubicacion.png')}
                 resizeMode="contain"
               />
              <View style={styles.mapPinContainer}>
                <Text style={styles.mapPin}>📍</Text>
              </View>
            </View>

            {/* Dirección */}
            <Button 
              mode="contained" 
              onPress={handleLocationPress}
              style={styles.directionButton}
              labelStyle={styles.directionButtonLabel}
            >
              Carrera 15 No 45 - 20 Bogotá
            </Button>
          </View>
        </View>

        {/* Redes Sociales */}
        <View style={styles.socialSection}>
          <View style={styles.socialContainer}>
            {/* <Button 
              icon={() => <Text style={styles.socialIcon}>𝕏</Text>}
              onPress={() => handleSocialPress('Twitter')}
              style={styles.socialButton}
            />
            <Button 
              icon={() => <Text style={styles.socialIcon}>📷</Text>}
              onPress={() => handleSocialPress('Instagram')}
              style={styles.socialButton}
            />
            <Button 
              icon={() => <Text style={styles.socialIcon}>▶️</Text>}
              onPress={() => handleSocialPress('YouTube')}
              style={styles.socialButton}
            />
            <Button 
              icon={() => <Text style={styles.socialIcon}>in</Text>}
              onPress={() => handleSocialPress('LinkedIn')}
              style={styles.socialButton}
            /> */}
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
  contactCard: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactGroup: {
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  infoColumn: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#999999',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  contactButton: {
    alignSelf: 'flex-start',
    padding: 0,
  },
  contactButtonLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
  },
  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginVertical: 16,
  },
  scheduleSection: {
    marginBottom: 0,
  },
  sectionTitle: {
    fontWeight: '700',
    marginBottom: 12,
    fontSize: 16,
    color: '#333333',
  },
  scheduleText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666666',
    marginBottom: 4,
  },
  scheduleTextBold: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333333',
    fontWeight: '700',
    marginBottom: 4,
  },
  locationSection: {
    marginBottom: 0,
  },
  mapContainer: {
    position: 'relative',
    marginBottom: 12,
    borderRadius: 8,
    overflow: 'hidden',
    height: 200,
    backgroundColor: '#F0F0F0',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  mapPinContainer: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -24 }],
  },
  mapPin: {
    fontSize: 24,
  },
  directionButton: {
    backgroundColor: '#3366FF',
    borderRadius: 8,
  },
  directionButtonLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  socialSection: {
    marginTop: 12,
    marginBottom: 24,
    alignItems: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  socialButton: {
    borderRadius: 50,
  },
  socialIcon: {
    fontSize: 18,
    fontWeight: '600',
  },
  navbarPlaceholder: {
    height: 80,
  },
});