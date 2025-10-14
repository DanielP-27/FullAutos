import PanelSuperior from '@/components/PanelSuperior';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegisterCVScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contacto, setContacto] = useState('');
  const [areaInteres, setAreaInteres] = useState('');
  const [cvAttached, setCvAttached] = useState(false);

  const areas = [
    'Mecánica automotriz',
    'Electricidad automotriz',
    'Pintura y carrocería',
    'Diagnóstico electrónico',
    'Mantenimiento preventivo',
  ];

  const handleAttachCV = () => {
    // Aquí iría la lógica para seleccionar archivo
    setCvAttached(true);
  };

  const handleSubmit = () => {
    if (!name || !email || !contacto || !areaInteres) {
      alert('Por favor completa todos los campos');
      return;
    }

    alert('Solicitud enviada exitosamente');
    
    // Limpiar formulario
    setName('');
    setEmail('');
    setContacto('');
    setAreaInteres('');
    setCvAttached(false);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <PanelSuperior
        title="Registrar CV"
        onNotificationPress={() => console.log("Notificaciones")}
        notificationCount={3}
      />

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formCard}>
          {/* Nombre Completo */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre Completo</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Ej. Alex Smith"
              style={styles.input}
              mode="outlined"
              outlineColor="#E5E7EB"
              activeOutlineColor="#5838B8"
            />
          </View>

          {/* Correo Electrónico */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Correo Electrónico</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="@ejemplo.com"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              mode="outlined"
              outlineColor="#E5E7EB"
              activeOutlineColor="#5838B8"
            />
          </View>

          {/* Contacto */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Contacto</Text>
            <TextInput
              value={contacto}
              onChangeText={setContacto}
              placeholder="+57 311 565 86 86"
              keyboardType="phone-pad"
              style={styles.input}
              mode="outlined"
              outlineColor="#E5E7EB"
              activeOutlineColor="#5838B8"
            />
          </View>

          {/* Área de Interés */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Área De Interés</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={areaInteres}
                onValueChange={(itemValue: string) => setAreaInteres(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Seleccionar Área" value="" />
                {areas.map((area, index) => (
                  <Picker.Item key={index} label={area} value={area} />
                ))}
              </Picker>
            </View>
          </View>

          {/* Subir CV */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Sube tu CV</Text>
            <TouchableOpacity 
              style={styles.fileInput}
              onPress={handleAttachCV}
            >
              <Text style={styles.fileInputText}>
                {cvAttached ? 'CV adjuntado' : 'Subir hoja de vida (PDF)'}
              </Text>
              <Ionicons 
                name={cvAttached ? "checkmark-circle" : "cloud-upload-outline"} 
                size={24} 
                color={cvAttached ? "#10B981" : "#5838B8"} 
              />
            </TouchableOpacity>
          </View>

          {/* Botón Enviar */}
          <TouchableOpacity 
            style={styles.submitButton} 
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Enviar Solicitud</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
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
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
  pickerContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  picker: {
    height: 56,
  },
  fileInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  fileInputText: {
    fontSize: 16,
    color: '#6B7280',
  },
  submitButton: {
    backgroundColor: '#5838B8',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
