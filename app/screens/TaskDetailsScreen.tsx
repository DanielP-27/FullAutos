import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, PaperProvider, Paragraph, Title } from 'react-native-paper';
import { RootStackParamList } from '../Navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskDetails'>;

export default function TaskDetailsScreen({ navigation, route }: Props) {
  const { colors } = useTheme();
  const { taskId } = route.params;
  const task = {
    id: taskId,
    name: `Tarea ${taskId}`,
    description: `Detalles de la tarea ${taskId}. Inspección y mantenimiento requerido.`,
  };

  return (
    <PaperProvider>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>{task.name}</Title>
            <Paragraph>{task.description}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              mode="outlined"
              onPress={() => navigation.navigate('TaskList')}
            >
              Volver
            </Button>
          </Card.Actions>
        </Card>
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
  card: {
    marginBottom: 16,
  },
  navbarPlaceholder: {
    height: 60,
    backgroundColor: '#f0f0f0',
  },
});