<<<<<<< HEAD
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PanelSuperiorProps {
  title: string; // Ej: "Hola, Usuario"
  subtitle?: string;
  onNotificationPress?: () => void;
  notificationCount?: number;
  onProfilePress?: () => void; // opcional: si quieres que el icono de usuario sea presionable
}

const PanelSuperior: React.FC<PanelSuperiorProps> = ({
  title,
  subtitle,
  onNotificationPress,
  notificationCount = 0,
  onProfilePress,
}) => {
  return (
    <View style={styles.container}>
      {/* Izquierda: Icono de usuario */}
      <TouchableOpacity onPress={onProfilePress} style={styles.profileIconContainer}>
        <Ionicons name="person-circle-outline" size={48} color="#fff" />
      </TouchableOpacity>

      {/* Centro: Texto */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>

      {/* Derecha: Notificación */}
      {onNotificationPress && (
        <TouchableOpacity style={styles.notificationButton} onPress={onNotificationPress}>
          <Ionicons name="notifications-outline" size={28} color="#fff" />
          {notificationCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notificationCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
=======
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
>>>>>>> ramaFelipe
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2567E8',
<<<<<<< HEAD
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
=======
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
>>>>>>> ramaFelipe
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
<<<<<<< HEAD

  },
  profileIconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
=======
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
>>>>>>> ramaFelipe
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
<<<<<<< HEAD
    marginTop: 2,
  },
  notificationButton: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
});

export default PanelSuperior;
=======
    marginTop: 8,
    textAlign: 'center',
  },
  iconContainer: {
    marginTop: 10,
  },
});

export default PanelSuperior;
>>>>>>> ramaFelipe
