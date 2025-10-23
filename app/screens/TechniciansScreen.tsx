import PanelSuperior from '@/components/PanelSuperior';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';

export default function TechniciansScreen() {
  const { colors } = useTheme();

  const technicians = [
    {
      id: 1,
      name: 'Jerome Bell',
      email: '@gmail.com',
      title: 'Mecánico Automotriz',
      description: 'Profesional en mantenimiento y reparación de vehículos. Experto en frenos, suspensión y motor, garantiza un servicio seguro y de calidad.',
      rating: 3,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jerome1',
    },
    {
      id: 2,
      name: 'Jerome Bell',
      email: '@gmail.com',
      title: 'Técnico en Alineación y Balanceo',
      description: 'Especialista en calibración de llantas y dirección. Su trabajo asegura una conducción estable, mayor rendimiento y durabilidad del vehículo.',
      rating: 3,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jerome2',
    },
    {
      id: 3,
      name: 'Jerome Bell',
      email: '@gmail.com',
      title: 'Asesor de Servicio',
      description: 'Responsable de recibir a los clientes, asesorar sobre el mejor servicio y garantizar una experiencia satisfactoria.',
      rating: 3,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jerome3',
    },
  ];

  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => (
        <MaterialCommunityIcons
          key={i}
          name="star"
          size={18}
          color="#3366FF"
          style={{ marginRight: 4 }}
        />
      ));
  };

  return (
    <PaperProvider>
      <PanelSuperior
        title="Técnicos"
        onNotificationPress={() => console.log("Notificaciones")}
        notificationCount={3}
      />

      <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
        
        {/* Lista de técnicos */}
        <View style={styles.techniciansList}>
          {technicians.map((tech) => (
            <View key={tech.id} style={[styles.techCard, { backgroundColor: '#FFFFFF' }]}>
              
              {/* Header con avatar y nombre */}
              <View style={styles.techHeader}>
                <Image
                  source={{ uri: tech.avatar }}
                  style={styles.avatar}
                />
                <View style={styles.techInfo}>
                  <Text variant="bodyLarge" style={styles.techName}>
                    {tech.name}
                  </Text>
                  <Text variant="bodySmall" style={styles.techEmail}>
                    {tech.email}
                  </Text>
                </View>
                <View style={styles.starsContainer}>
                  {renderStars(tech.rating)}
                </View>
              </View>

              {/* Título del puesto */}
              <Text variant="titleMedium" style={styles.techTitle}>
                {tech.title}
              </Text>

              {/* Descripción */}
              <Text variant="bodyMedium" style={styles.techDescription}>
                {tech.description}
              </Text>

            </View>
          ))}
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
  techniciansList: {
    gap: 16,
    marginBottom: 16,
  },
  techCard: {
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  techHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  techInfo: {
    flex: 1,
  },
  techName: {
    fontWeight: '700',
    fontSize: 14,
    color: '#333333',
  },
  techEmail: {
    fontSize: 12,
    color: '#999999',
    marginTop: 2,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  techTitle: {
    fontWeight: '700',
    fontSize: 15,
    color: '#333333',
    marginBottom: 8,
  },
  techDescription: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 20,
  },
  navbarPlaceholder: {
    height: 80,
  },
});