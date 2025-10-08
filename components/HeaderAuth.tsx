import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderAuthProps {
  title: string;
  subtitle?: string;
}

const HeaderAuth: React.FC<HeaderAuthProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2567E8', // color azul principal
    paddingTop: 60,
    paddingBottom: 60,
    paddingHorizontal: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',

    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
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

export default HeaderAuth;