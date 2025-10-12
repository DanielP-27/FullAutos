 import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // O cualquier pack de iconos


interface PanelSuperiorProps {
  title: string;
  subtitle?: string;
  onNotificationPress?: () => void;
}

const PanelSuperior: React.FC<PanelSuperiorProps> = ({title, subtitle, onNotificationPress}) => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    
          {onNotificationPress && (
        <TouchableOpacity style={styles.iconContainer} onPress={onNotificationPress}>
          <Ionicons name="notifications-outline" size={28} color="#fff" />
        </TouchableOpacity>
      )}
        </View>
      );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2567E8',
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 20,
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
  iconContainer: {
    marginTop: 10,
  },
});

export default PanelSuperior;