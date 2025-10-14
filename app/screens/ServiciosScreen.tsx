import TarjetaServicios from '@/components/ServiceCard';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import NavbarBottom from "../../components/NavbarBottom";
import PanelSuperior from "../../components/PanelSuperior";
import { serviciosData } from "../../data/serviciosData";

export default function ServicesScreen() {

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

      router.push({
        pathname: '/screens/DetalleServicioScreen',
        params:{
          servicioId: serviceId.toString()
        }
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
 