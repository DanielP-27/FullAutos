import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';

// Se definen las propiedades que tendra cada uno de los elementos individuales del componente // 
interface PropiedadesTarjetaServicios {
  titulo: string;
  imagen: ImageSourcePropType;
  onPress: () => void;
}

// Función especifica para visualizar cada tarjeta de forma individual //
export default function TarjetaServicios({ titulo, imagen, onPress }: PropiedadesTarjetaServicios) {
  return (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.leftSection}>
          <Title style={styles.title}>{titulo}</Title>
          <Button 
            mode="contained" 
            onPress={onPress}
            style={styles.button}
            labelStyle={styles.buttonLabel}
            buttonColor="#5838B8"
          >
            Consultar
          </Button>
        </View>
        <View style={styles.rightSection}>
          <Image source={imagen} style={styles.image} resizeMode="contain" />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    minHeight: 120,
  },
  leftSection: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 12,
  },
  button: {
    borderRadius: 25,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
  },
  buttonLabel: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  rightSection: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});