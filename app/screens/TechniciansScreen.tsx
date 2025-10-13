import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

export default function TechniciansScreen() {
  const technicians = [
    { id: 1, name: 'Juan Pérez', experience: 5, recognition: 'Premio Excelencia 2023' },
    { id: 2, name: 'María López', experience: 8, recognition: 'Reconocimiento Nacional 2022' },
    { id: 3, name: 'Carlos Gómez', experience: 3, recognition: 'Técnico destacado 2021' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.mainTitle}>Técnicos</Title>

      {technicians.map(tech => (
        <Card key={tech.id} style={styles.card}>
          <Card.Content>
            <Title>{tech.name}</Title>
            <Paragraph>Años de experiencia: {tech.experience}</Paragraph>
            <Paragraph>Reconocimiento: {tech.recognition}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => alert(`Contactar a ${tech.name}`)}>Contactar</Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f4f6f8' },
  mainTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#490e89ff', textAlign: 'center' },
  card: { marginBottom: 15, borderRadius: 10, elevation: 3 },
});
