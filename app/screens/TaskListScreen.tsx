import PanelSuperior from '@/components/PanelSuperior';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, PaperProvider, Text } from 'react-native-paper';
import { RootStackParamList } from '../Navigation';

interface Task {
  id: string;
  name: string;
  description: string;
}

type Props = NativeStackScreenProps<RootStackParamList, 'TaskListScreen'>;

export default function TaskListScreen({ navigation }: Props) {
  const { colors } = useTheme();
  const tasks: Task[] = [
    {id: '1', name: 'Mejorar estabilidad del vehículo', description: 'Inspección de frenos Toyota Corolla'},
    { id: '2', name: 'Revisión de Frenos', description: 'Inspección de frenos Toyota Corolla' },
    { id: '3', name: 'Cambio de Aceite', description: 'Cambio de aceite Honda Civic' },
    { id: '4', name: 'Diagnóstico Motor', description: 'Diagnóstico Ford Mustang' },
  ];

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
          
          {/* Título */}
          <Text variant="titleLarge" style={styles.cardTitle}>
            Tareas Principales
          </Text>

          {/* Lista de tareas */}
          <View style={styles.tasksList}>
            {tasks.map((task, index) => (
              <TouchableOpacity
                key={task.id}
                style={styles.taskItem}
                onPress={() => navigation.navigate('TaskDetailsScreen', { taskId: task.id })}
              >
                <MaterialCommunityIcons 
                  name="checkbox-marked" 
                  size={20} 
                  color="#3366FF"
                />
                <View style={styles.taskContent}>
                  <Text variant="bodyMedium" style={styles.taskName}>
                    {task.name}
                  </Text>
                  <Text variant="bodySmall" style={styles.taskDescription}>
                    {task.description}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Botón Historial */}
          <Button
            mode="contained"
            onPress={() => console.log("Ver historial")}
            style={styles.historialButton}
            labelStyle={styles.historialButtonLabel}
          >
            Historial de tareas
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
  cardTitle: {
    fontWeight: '700',
    fontSize: 18,
    color: '#333333',
    marginBottom: 16,
  },
  tasksList: {
    marginBottom: 20,
    gap: 12,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  taskContent: {
    flex: 1,
  },
  taskName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  taskDescription: {
    fontSize: 12,
    color: '#999999',
  },
  historialButton: {
    backgroundColor: '#3366FF',
    borderRadius: 8,
    paddingVertical: 8,
  },
  historialButtonLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  navbarPlaceholder: {
    height: 80,
  },
});