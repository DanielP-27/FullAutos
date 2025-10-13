import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';

export default function ServicesScreen() {
  const services = [
    { id: 1, name: 'Mantenimiento', description: 'Cambio de aceite, filtros y revisión general.' },
    { id: 2, name: 'Reparación', description: 'Reparación de motores, frenos y suspensión.' },
    { id: 3, name: 'Lavado y Detailing', description: 'Lavado completo, encerado y limpieza interior.' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.mainTitle}>Servicios</Title>

      {services.map(service => (
        <Card key={service.id} style={styles.card}>
          <Card.Content>
            <Title>{service.name}</Title>
            <Paragraph>{service.description}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => alert(`Ver técnicos relacionados a ${service.name}`)}>Consultar</Button>
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
