import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';

interface HeaderPagProps {
  title: string;
  subtitle?: string;
  linkText?: string;
  onLinkPress?: () => void;
}

const HeaderPag: React.FC<HeaderPagProps> = ({ title, subtitle, linkText, onLinkPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}

      {linkText && (
        <TouchableOpacity onPress={onLinkPress}>
          <Text style={styles.link}>{linkText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2567E8', // color azul principal
    paddingTop: 40,
    paddingBottom: 40,
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

  link: {
    color: '#fff', // blanco
    fontSize: 14,
    marginTop: 10,
    textDecorationLine: 'underline', // opcional, para que parezca un link
  },
});

export default HeaderPag;