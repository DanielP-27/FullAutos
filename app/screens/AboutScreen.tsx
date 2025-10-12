import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Title style={styles.mainTitle}>Acerca de Full Autos SAS</Title>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Misión</Title>
          <Paragraph>
            Brindar servicios de calidad, ampliando nuestra cobertura y mejorando la interacción con clientes y aspirantes.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Visión</Title>
          <Paragraph>
            Ser líderes en innovación y atención al cliente en el sector automotriz.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Trayectoria</Title>
          <Paragraph>
            Full Autos SAS es una empresa dedicada a servicios automotrices con amplia trayectoria y reconocimiento en el territorio nacional.
          </Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f4f6f8' },
  mainTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#490e89ff', textAlign: 'center' },
  card: { marginBottom: 15, borderRadius: 10, elevation: 3 },
});
