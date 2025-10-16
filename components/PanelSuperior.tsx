import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PanelSuperiorProps {
  title: string; // Ej: "Hola, Usuario"
  subtitle?: string;
  onNotificationPress?: () => void;
  notificationCount?: number;
  onProfilePress?: () => void; // Si se quiere hacer clic en el icono del usuario
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
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2567E8',
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  profileIconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
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
