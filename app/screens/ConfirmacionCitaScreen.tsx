import { Ionicons } from '@expo/vector-icons';
import type { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavbarBottom from '../../components/NavbarBottom';
import type { RootStackParamList } from '../Navigation';

type CitaProgramadaRouteProp = RouteProp<RootStackParamList, 'CitaProgramada'>;

export default function CitaProgramadaScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<CitaProgramadaRouteProp>();

  const [activeTab, setActiveTab] = useState('search');

  const {
    nombreCompleto,
    correo,
    contacto,
    servicio,
    tecnico,
    fecha,
    hora,
  } = route.params;

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleConfirmar = () => {
    alert('Cita confirmada exitosamente');
    navigation.navigate('Services');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.headerSafeArea}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Cita programada</Text>
          <View style={styles.placeholder} />
        </View>
      </SafeAreaView>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Nombre Completo</Text>
            <Text style={styles.value}>{nombreCompleto}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.label}>Servicio</Text>
            <Text style={styles.value}>{servicio}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.label}>Técnico</Text>
            <View style={styles.technicianContainer}>
              <Text style={styles.value}>{tecnico}</Text>
              <Ionicons name="chevron-down" size={20} color="#6B7280" />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.label}>Fecha</Text>
            <Text style={styles.dateValue}>{fecha}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.label}>Hora</Text>
            <Text style={styles.value}>{hora}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.confirmarButton} onPress={handleConfirmar}>
          <Text style={styles.confirmarButtonText}>Confirmar Cita</Text>
        </TouchableOpacity>

        <View style={styles.additionalInfo}>
          <Text style={styles.additionalInfoText}>
            Recibirás un correo de confirmación a: {correo}
          </Text>
          <Text style={styles.additionalInfoText}>
            Te contactaremos al: {contacto}
          </Text>
        </View>
      </ScrollView>

      <NavbarBottom 
        activeTab={activeTab} 
        onTabPress={handleTabPress} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2567E8',
  },
  headerSafeArea: {
    backgroundColor: '#2567E8',
  },
  header: {
    backgroundColor: '#2567E8',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 34,
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 100,
  },
  infoSection: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  infoRow: {
    paddingVertical: 16,
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
  },
  technicianContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateValue: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  confirmarButton: {
    backgroundColor: '#5838B8',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  confirmarButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  additionalInfo: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  additionalInfoText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
});