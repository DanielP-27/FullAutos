<<<<<<< HEAD

=======
>>>>>>> ramaFelipe
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from './ThemedText';

interface NavbarBottomProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
}

export default function NavbarBottom({ activeTab, onTabPress }: NavbarBottomProps) {
  const tabs = [
    { id: 'home', icon: 'home', label: 'Inicio' },
    { id: 'search', icon: 'search', label: 'Servicios' },
    { id: 'profile', icon: 'person', label: 'Acerca de' },
    { id: 'phone', icon: 'call', label: 'Contacto' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        
        return (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tab,
              isActive && styles.activeTab
            ]}
            onPress={() => onTabPress(tab.id)}
            activeOpacity={0.7}
          >
            <View style={[
              styles.iconContainer,
              isActive && styles.activeIconContainer
            ]}>
              <Ionicons
                name={tab.icon as any}
                size={24}
                color={isActive ? '#FFFFFF' : '#6B7280'}
              />
            </View>
            
            {isActive && (
              <ThemedText style={styles.label}>
                {tab.label}
              </ThemedText>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  activeTab: {
    flexDirection: 'row',
    backgroundColor: '#4338CA',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIconContainer: {
    width: 'auto',
    marginRight: 8,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 4,
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> ramaFelipe
