import PanelSuperior from '@/components/PanelSuperior';
import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Card, PaperProvider, Paragraph, Title } from 'react-native-paper';
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
    { id: '1', name: 'Revisión de Frenos', description: 'Inspección de frenos Toyota Corolla' },
    { id: '2', name: 'Cambio de Aceite', description: 'Cambio de aceite Honda Civic' },
    { id: '3', name: 'Diagnóstico Motor', description: 'Diagnóstico Ford Mustang' },
  ];

  const renderTaskItem = ({ item }: { item: Task }) => (
    <Card style={[styles.card, { backgroundColor: colors.card }]}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>{item.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('TaskDetailsScreen', { taskId: item.id })}
        >
          Ver Detalles
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <PaperProvider>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <PanelSuperior
          title="Tareas"
          onNotificationPress={() => console.log("Notificaciones")}
          notificationCount={3}
        />
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={renderTaskItem}
          contentContainerStyle={styles.list}
        />
        {/* Placeholder para el navbar bottom (componente separado) */}
        <View style={styles.navbarPlaceholder} />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  list: {
    paddingBottom: 60, 
  },
  card: {
    marginBottom: 16,
  },
  navbarPlaceholder: {
    height: 60, 
    backgroundColor: '#f0f0f0',
  },
});