import PanelSuperior from '@/components/PanelSuperior';
import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { Button, PaperProvider, Text } from 'react-native-paper';
import { RootStackParamList } from '../Navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskDetailsScreen'>;

export default function TaskDetailsScreen({ navigation, route }: Props) {
  const { colors } = useTheme();
  const { taskId } = route.params;
  const [comments, setComments] = useState('');

  const taskDetails = {
    id: taskId,
    date: '12 de septiembre de 2025',
    code: 'COD: 101',
    title: 'Mejorar estabilidad del vehículo',
    details: [
      'Verificación de dirección y suspensión.',
      'Ajuste preciso de llantas y balanceo.',
      'Corrección de vibraciones al conducir.',
      'Revisión general para una conducción segura.',
    ],
    client: 'Johan díaz',
    contact: '123 565',
    direction: 'calle 55',
  };

  return (
    <PaperProvider>
      <PanelSuperior
        title="Tareas"
        onNotificationPress={() => console.log("Notificaciones")}
        notificationCount={3}
      />
      
      <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
        
        {/* Tarjeta blanca */}
        <View style={[styles.card, { backgroundColor: '#FFFFFF' }]}>
          
          {/* Fecha y Código */}
          <View style={styles.headerInfo}>
            <View>
              <Text variant="bodySmall" style={styles.dateText}>
                {taskDetails.date}
              </Text>
            </View>
            <Text variant="bodySmall" style={styles.codeText}>
              {taskDetails.code}
            </Text>
          </View>

          {/* Título */}
          <Text variant="headlineSmall" style={styles.title}>
            {taskDetails.title}
          </Text>

          {/* Lista de detalles */}
          <View style={styles.detailsList}>
            {taskDetails.details.map((detail, index) => (
              <View key={index} style={styles.detailItem}>
                <Text style={styles.bullet}>•</Text>
                <Text variant="bodyMedium" style={styles.detailText}>
                  {detail}
                </Text>
              </View>
            ))}
          </View>

          {/* Comentarios */}
          <View style={styles.commentsSection}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Comentarios
            </Text>
            <TextInput
              style={[styles.commentInput, { backgroundColor: '#F5F5F5'}]}
              placeholder="Escribe aquí"
              placeholderTextColor="#CCCCCC"
              multiline
              numberOfLines={4}
              value={comments}
              onChangeText={setComments}
            />
          </View>

          {/* Información del Cliente */}
          <View style={styles.clientSection}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Cliente: {taskDetails.client}
            </Text>
            <Text variant="bodyMedium" style={styles.clientInfo}>
              Contacto: {taskDetails.contact}
            </Text>
            <Text variant="bodyMedium" style={styles.clientInfo}>
              Dirección: {taskDetails.direction}
            </Text>
          </View>

          {/* Botón Marcar como Finalizado */}
          <Button
            mode="contained"
            onPress={() => console.log("Tarea marcada como finalizada")}
            style={styles.completeButton}
            labelStyle={styles.completeButtonLabel}
          >
            Marcar como Finalizado
          </Button>

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
  card: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateText: {
    color: '#999999',
    fontSize: 12,
  },
  codeText: {
    color: '#999999',
    fontSize: 12,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: '#333333',
    marginBottom: 16,
    lineHeight: 26,
  },
  detailsList: {
    marginBottom: 20,
    gap: 8,
  },
  detailItem: {
    flexDirection: 'row',
    gap: 8,
  },
  bullet: {
    fontSize: 12,
    color: '#333333',
    fontWeight: '600',
    marginTop: 2,
  },
  detailText: {
    fontSize: 13,
    color: '#333333',
    flex: 1,
    lineHeight: 18,
  },
  commentsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 14,
    color: '#333333',
    marginBottom: 12,
  },
  commentInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 13,
    fontFamily: 'System',
    textAlignVertical: 'top',
  },
  clientSection: {
    marginBottom: 20,
  },
  clientInfo: {
    fontSize: 13,
    color: '#333333',
    marginBottom: 4,
  },
  completeButton: {
    backgroundColor: '#3366FF',
    borderRadius: 8,
    paddingVertical: 8,
  },
  completeButtonLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  navbarPlaceholder: {
    height: 80,
  },
});