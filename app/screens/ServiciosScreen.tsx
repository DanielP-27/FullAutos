import TarjetaServicios from '@/components/ServiceCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import NavbarBottom from "../../components/NavbarBottom";
import PanelSuperior from "../../components/PanelSuperior";
import { serviciosData } from "../../data/serviciosData";
import type { RootStackParamList } from '../Navigation';

export default function ServicesScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [activeTab, setActiveTab] = useState('search')

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  }

  const services = [
    { id: 1, name: 'Alineación y Suspensión', image: require('../../assets/images/alineacion.jpg') },
    { id: 2, name: 'Revision Preventiva', image: require ('../../assets/images/preventiva.jpg') },
    { id: 3, name: 'Cambio de Aceite', image: require('../../assets/images/aceite.jpg') },
    { id: 4, name: 'Cambio de Bateria', image: require('../../assets/images/bateria.jpg') },
  ];

  const handleServicePress = (serviceId: number) => {
      const servicioDetalle = serviciosData[serviceId];
      console.log('Servicio seleccionado', servicioDetalle)

      navigation.navigate('DetalleServicio', {
        servicioId: serviceId
      });
    };

  return (
    <View style={styles.container}>
      <PanelSuperior
      title="Servicios"
      onNotificationPress={() => console.log("Notificaciones")}
      notificationCount={5}
      />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {services.map(service => (
          <TarjetaServicios
            key={service.id}
            titulo={service.name}
            imagen={service.image}
            onPress={() => handleServicePress(service.id)}
          />
        ))}
      </ScrollView>

      <NavbarBottom 
      activeTab={activeTab} 
      onTabPress={handleTabPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 16,
    paddingBottom: 80,
  },
});
 