// components/GridCardsHome.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../app/Navigation";

const data = [
  { id: '1', title: 'Acerca de la Empresa', icon: 'business-outline', color: '#4F46E5', route: 'About' },
  { id: '2', title: 'Servicios', icon: 'hand-left-outline', color: '#EF4444', route: 'Services' },
  { id: '3', title: 'Postular CV', icon: 'document-text-outline', color: '#10B981', route: 'RegisterCV' },
  { id: '4', title: 'Técnicos', icon: 'people-outline', color: '#F59E0B', route: 'Technicians' },
  { id: '5', title: 'Tareas', icon: 'clipboard-outline', color: '#2563EB', route: '' },
];

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const GridCardsHome = () => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = (route: string, title: string) => {
    if (route) {
      navigation.navigate(route as keyof RootStackParamList);
    } else {
      Alert.alert(title, 'Pantalla en construcción');
    }
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => handlePress(item.route, item.title)}
    >
      <View style={[styles.iconContainer, { backgroundColor: `${item.color}15` }]}>
        <Ionicons name={item.icon as any} size={36} color={item.color} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FAFB',
    paddingTop: 20,
  },
  grid: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
});

export default GridCardsHome;
