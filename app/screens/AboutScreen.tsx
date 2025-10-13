import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import HeaderAbout from '../../components/HeaderAbout';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.Header}>
      <HeaderAbout title="ACERCA DE" subtitle="FULL AUTOS SAS" />
      </View>

      {/* Trayectoria */}
      <View style={styles.section}>
        <Text style={styles.title}>Trayectoria</Text>
        <Text style={styles.text}>
          Full Autos SAS es una empresa dedicada a ofrecer servicios automotrices con una amplia trayectoria en el mercado, caracterizada por su compromiso con la calidad y la satisfacción del cliente.
        </Text>
      </View>

      {/* Misión y Visión con imagen */}
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Misión</Text>
          <Text style={styles.text}>
            Brindar servicios de calidad, ampliando nuestra cobertura y mejorando la interacción con clientes y aspirantes.
          </Text>

          <Text style={[styles.title, { marginTop: 20 }]}>Visión</Text>
          <Text style={styles.text}>
            Ser líderes en innovación y atención al cliente en el sector automotriz.
          </Text>
        </View>

        {/* Imagen a la derecha */}
        <Image
          source={require('../../assets/images/mecanico.webp')} // cambia la ruta según tu proyecto
          style={styles.image}
          resizeMode="contain"
        />
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },

  Header:{
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 30,
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 220,
  },
  row: {
    
    flexDirection: 'row', // layout horizontal
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  textContainer: {
    flex: 1, // ocupa todo el espacio a la izquierda
    paddingRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  text: {
    fontSize: 16,
    marginTop: 6,
    color: '#333',
  },
  image: {
  width: 220,           // ancho máximo
  height: 220,          // altura máxima
  flexShrink: 1,        // permite que se reduzca si falta espacio
  flexBasis: 160,       // tamaño inicial antes de reducir
  borderRadius: 10,
  borderTopEndRadius:6,
},
});
