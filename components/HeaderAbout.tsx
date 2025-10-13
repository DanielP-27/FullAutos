import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';


interface HeaderAboutProps {
  title: string;
  subtitle?: string;
}

const HeaderAbout: React.FC<HeaderAboutProps> = ({ title, subtitle }) => {
  return (
    <ImageBackground
      source={require('../assets/images/imgAbout.webp')} // Ruta de tu imagen
      style={styles.container}
      resizeMode="cover" // Ajusta la imagen para cubrir todo el contenedor
    >
      {/* Overlay azul semitransparente */}
      <View style={styles.overlay} />

      {/* Contenido */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250, // Ajusta según tu header
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 60,
    paddingBottom: 80,
    overflow: 'hidden',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // llena todo el contenedor
    backgroundColor: 'rgba(37, 103, 232, 0.4)', // azul con opacidad
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 60,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});


export default HeaderAbout;