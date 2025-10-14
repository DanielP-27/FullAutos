import PanelSuperior from '@/components/PanelSuperior';
import { serviciosData } from '@/data/serviciosData';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, Title } from 'react-native-paper';

export default function DetalleServicioScreen() {
  const params = useLocalSearchParams();
  const ServicioId = Number(params.servicioId);
  const servicio = serviciosData[ServicioId];

  const handleContratarServicio = () => {
    alert(`Contratar servicio: ${servicio.nombre}`);
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <PanelSuperior
      title="Servicios"
      onNotificationPress={() => console.log("Notificaciones")}
      notificationCount={5}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Valor Servicio</Text>
            <Text style={styles.precio}>{servicio.precio}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Horarios de atención</Text>
            <Text style={styles.horarios}>{servicio.horarios}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.contratarButton} onPress={handleContratarServicio}>
          <Ionicons name="add-circle-outline" size={24} color="#5838B8" />
          <Text style={styles.contratarText}>Contratar Servicio</Text>
        </TouchableOpacity>

        <Title style={styles.servicioTitulo}>{servicio.nombre}</Title>

        <View style={styles.descripcionContainer}>
          {servicio.descripcion.map((parrafo: string, index: number) => (
            <Text key={index} style={styles.descripcionTexto}>
              {parrafo}
            </Text>
          ))}
        </View>

        <View style={styles.tiempoContainer}>
          <Text style={styles.tiempoLabel}>Tiempo estimado:</Text>
          <Text style={styles.tiempoValor}>{servicio.tiempoEstimado}</Text>
        </View>

        <View style={styles.contactoContainer}>
          <Text style={styles.contactoTitulo}>Contacto</Text>
          <Text style={styles.contactoTexto}>{servicio.contacto.direccion}</Text>
          <Text style={styles.contactoTexto}>Tel: {servicio.contacto.telefono}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#4F46E5',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 5,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -30,
  },
  headerIcon: {
    marginRight: 10,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationButton: {
    position: 'relative',
    padding: 5,
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#EF4444',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  infoCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 16,
    color: '#6B7280',
  },
  precio: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 15,
  },
  horarios: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5838B8',
  },
  contratarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#5838B8',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  contratarText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5838B8',
    marginLeft: 8,
  },
  servicioTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 15,
  },
  descripcionContainer: {
    marginBottom: 20,
  },
  descripcionTexto: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4B5563',
    marginBottom: 12,
  },
  tiempoContainer: {
    marginBottom: 25,
  },
  tiempoLabel: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '600',
  },
  tiempoValor: {
    fontSize: 16,
    color: '#4B5563',
    marginTop: 5,
  },
  contactoContainer: {
    marginBottom: 30,
  },
  contactoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 10,
  },
  contactoTexto: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 5,
  },
});