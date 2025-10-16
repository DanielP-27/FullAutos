import PanelSuperior from '@/components/PanelSuperior';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import NavbarBottom from '../../components/NavbarBottom';
import type { RootStackParamList } from '../Navigation';

export default function RegistroServicioScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [activeTab, setActiveTab] = useState('search');
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correo, setCorreo] = useState('');
  const [contacto, setContacto] = useState('');
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');
  const [tecnicoSeleccionado, setTecnicoSeleccionado] = useState('');
  const [mes, setMes] = useState('');
  const [dia, setDia] = useState('');
  const [anio, setAnio] = useState('');
  const [hora, setHora] = useState('');

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  const servicios = [
    'Alineación y suspensión',
    'Revisión Preventiva',
    'Cambio de Aceite',
    'Cambio de Batería',
  ];

  const tecnicos = [
    'Juan Pérez',
    'María López',
    'Carlos Gomez',
  ];

  const meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const dias = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
  const anios = ['2025', '2026'];
  const horas = [
    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
  ];

  const handleConfirmarCita = () => {
    if (!nombreCompleto || !correo || !contacto || !servicioSeleccionado || 
        !tecnicoSeleccionado || !mes || !dia || !anio || !hora) {
      alert('Por favor completa todos los campos');
      return;
    }

    navigation.navigate('CitaProgramada', {
      nombreCompleto,
      correo,
      contacto,
      servicio: servicioSeleccionado,
      tecnico: tecnicoSeleccionado,
      fecha: `${dia}/${mes}/${anio}`,
      hora,
    });
  };

  return (
    <View style={styles.container}>
      <PanelSuperior
        title="Registro servicio"
        onNotificationPress={() => console.log('Notificaciones')}
        notificationCount={3}
      />

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nombre Completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Alex Smith"
            value={nombreCompleto}
            onChangeText={setNombreCompleto}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Correo Electrónico</Text>
          <TextInput
            style={styles.input}
            placeholder="@ejemplo.com"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contacto</Text>
          <TextInput
            style={styles.input}
            placeholder="+57 311 565 86 86"
            value={contacto}
            onChangeText={setContacto}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Servicio</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={servicioSeleccionado}
              onValueChange={(itemValue: string) => setServicioSeleccionado(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Seleccionar servicio" value="" />
              {servicios.map((servicio, index) => (
                <Picker.Item key={index} label={servicio} value={servicio} />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Técnicos disponibles</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={tecnicoSeleccionado}
              onValueChange={(itemValue: string) => setTecnicoSeleccionado(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Seleccionar técnico" value="" />
              {tecnicos.map((tecnico, index) => (
                <Picker.Item key={index} label={tecnico} value={tecnico} />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Seleccionar fecha</Text>
          <View style={styles.dateRow}>
            <View style={[styles.pickerContainer, styles.datePickerSmall]}>
              <Picker
                selectedValue={mes}
                onValueChange={(itemValue: string) => setMes(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="MM" value="" />
                {meses.map((m, index) => (
                  <Picker.Item key={index} label={m} value={m} />
                ))}
              </Picker>
            </View>

            <View style={[styles.pickerContainer, styles.datePickerSmall]}>
              <Picker
                selectedValue={dia}
                onValueChange={(itemValue: string) => setDia(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="DD" value="" />
                {dias.map((d, index) => (
                  <Picker.Item key={index} label={d} value={d} />
                ))}
              </Picker>
            </View>

            <View style={[styles.pickerContainer, styles.datePickerSmall]}>
              <Picker
                selectedValue={anio}
                onValueChange={(itemValue: string) => setAnio(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="YYYY" value="" />
                {anios.map((a, index) => (
                  <Picker.Item key={index} label={a} value={a} />
                ))}
              </Picker>
            </View>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Seleccionar hora</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={hora}
              onValueChange={(itemValue: string) => setHora(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Hora" value="" />
              {horas.map((h, index) => (
                <Picker.Item key={index} label={h} value={h} />
              ))}
            </Picker>
          </View>
        </View>

        <TouchableOpacity style={styles.confirmarButton} onPress={handleConfirmarCita}>
          <Text style={styles.confirmarButtonText}>Confirmar Cita</Text>
        </TouchableOpacity>
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
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#111827',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  pickerContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  datePickerSmall: {
    flex: 1,
  },
  confirmarButton: {
    backgroundColor: '#2567E8',
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
});