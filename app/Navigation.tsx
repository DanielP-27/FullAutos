import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importar todas las pantallas
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ServicesScreen from './screens/ServiciosScreen';
import TechniciansScreen from './screens/TechniciansScreen';
import RegisterCVScreen from './screens/RegisterCVScreen';
import RegisterUser from './screens/RegisterUser';

// Definir los tipos de parámetros para navegación
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  About: undefined;
  Services: undefined;
  Technicians: undefined;
  RegisterCV: undefined;
  RegisterUser: undefined;
};

// Crear stack
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Inicio' }} 
      />
      <Stack.Screen 
        name="About" 
        component={AboutScreen} 
        options={{ title: 'Acerca de' }} 
      />
      <Stack.Screen 
        name="Services" 
        component={ServicesScreen} 
        options={{ title: 'Servicios' }} 
      />
      <Stack.Screen 
        name="Technicians" 
        component={TechniciansScreen} 
        options={{ title: 'Técnicos' }} 
      />
      <Stack.Screen 
        name="RegisterUser" 
        component={RegisterUser} 
        options={{ title: 'RegisterUser' }} 
      />
      <Stack.Screen 
        name="RegisterCV" 
        component={RegisterCVScreen} 
        options={{ title: '', headerStyle:{
          backgroundColor: '#2567E8',          
        },
        headerShadowVisible: false,
        headerTintColor:'#fff', }} 
      />
    </Stack.Navigator>
  );
}
