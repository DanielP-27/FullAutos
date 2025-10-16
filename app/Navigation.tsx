<<<<<<< HEAD
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Importar todas las pantallas
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ServicesScreen from "./screens/ServiciosScreen";
import TechniciansScreen from "./screens/TechniciansScreen";
import RegisterCVScreen from "./screens/RegisterCVScreen";
import RegisterUser from "./screens/RegisterUser";

import NavbarBottom from "../components/NavbarBottom";
=======
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavbarBottom from '@/components/NavbarBottom';

import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterCVScreen from './screens/RegisterCVScreen';
import RegisterUser from './screens/RegisterUser';
import ServicesScreen from './screens/ServiciosScreen';
import TaskDetailsScreen from './screens/TaskDetailsScreen';
import TaskListScreen from './screens/TaskListScreen';
import TechniciansScreen from './screens/TechniciansScreen';
>>>>>>> ramaFelipe

// Definir los tipos de parámetros para navegación
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  About: undefined;
  Services: undefined;
  Technicians: undefined;
  RegisterCV: undefined;
  RegisterUser: undefined;
  TaskList: undefined;
  TaskDetails: { taskId: string };
  Contact: undefined;
};

<<<<<<< HEAD
// Crear stack
const Stack = createNativeStackNavigator<RootStackParamList>();

// Pantallas donde NO debe mostrarse el navbar
const SCREENS_WITHOUT_NAVBAR = ["Login", "RegisterUser", "RegisterCV"];

// Mapeo de tabs del navbar a rutas del stack
const TAB_TO_ROUTE_MAP: { [key: string]: keyof RootStackParamList } = {
  home: "Home",
  search: "Services",
  profile: "About",
  phone: "Contact",
=======
const Stack = createNativeStackNavigator<RootStackParamList>();

// Pantallas donde NO debe mostrarse el navbar
const SCREENS_WITHOUT_NAVBAR = ['Login', 'RegisterUser', 'RegisterCV'];

// Mapeo de tabs del navbar a rutas del stack
const TAB_TO_ROUTE_MAP: { [key: string]: keyof RootStackParamList } = {
  home: 'Home',
  search: 'Services',
  profile: 'About',
  phone: 'Contact',
>>>>>>> ramaFelipe
};

// Componente wrapper para agregar el navbar
function ScreenWithNavbar({ children }: { children: React.ReactNode }) {
<<<<<<< HEAD
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute();

  // Determinar qué tab está activo basado en la ruta actual
  const getActiveTab = () => {
    const currentRoute = route.name as keyof RootStackParamList;

=======
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute();
  
  // Determinar qué tab está activo basado en la ruta actual
  const getActiveTab = () => {
    const currentRoute = route.name as keyof RootStackParamList;
    
>>>>>>> ramaFelipe
    // Buscar el tab que corresponde a la ruta actual
    for (const [tab, routeName] of Object.entries(TAB_TO_ROUTE_MAP)) {
      if (routeName === currentRoute) {
        return tab;
      }
    }
<<<<<<< HEAD

    return "home";
=======
    
    return 'home';
>>>>>>> ramaFelipe
  };

  const handleTabPress = (tab: string) => {
    const routeName = TAB_TO_ROUTE_MAP[tab];
    if (routeName) {
      // Usar type assertion para evitar error de TypeScript
      navigation.navigate(routeName as any);
    }
  };

  // No mostrar navbar en ciertas pantallas
  if (SCREENS_WITHOUT_NAVBAR.includes(route.name)) {
    return <>{children}</>;
  }

  return (
<<<<<<< HEAD
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <View style={styles.content}>{children}</View>
      <NavbarBottom activeTab={getActiveTab()} onTabPress={handleTabPress} />
=======
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.content}>
        {children}
      </View>
      <NavbarBottom 
        activeTab={getActiveTab()} 
        onTabPress={handleTabPress} 
      />
>>>>>>> ramaFelipe
    </SafeAreaView>
  );
}

export default function Navigation() {
  return (
<<<<<<< HEAD
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" options={{ headerShown: false }}>
=======
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        presentation: 'card',
      }}
    >
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Home" 
        options={{ title: 'Inicio' }}
      >
>>>>>>> ramaFelipe
        {({ navigation, route }) => (
          <ScreenWithNavbar>
            <HomeScreen navigation={navigation} route={route} />
          </ScreenWithNavbar>
        )}
      </Stack.Screen>
<<<<<<< HEAD
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Services"
        component={ServicesScreen}
        options={{ title: "Servicios" }}
      />
      <Stack.Screen
        name="Technicians"
        component={TechniciansScreen}
        options={{ title: "Técnicos" }}
      />
      <Stack.Screen
        name="RegisterUser"
        component={RegisterUser}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterCV"
        component={RegisterCVScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#2567E8",
          },
          headerShadowVisible: false,
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
=======
      <Stack.Screen 
        name="About" 
        options={{ title: 'Acerca de' }}
      >
        {() => (
          <ScreenWithNavbar>
            <AboutScreen />
          </ScreenWithNavbar>
        )}
      </Stack.Screen>
      <Stack.Screen 
        name="Services" 
        options={{ title: 'Servicios' }}
      >
        {() => (
          <ScreenWithNavbar>
            <ServicesScreen />
          </ScreenWithNavbar>
        )}
      </Stack.Screen>
      <Stack.Screen 
        name="Technicians" 
        options={{ title: 'Técnicos' }}
      >
        {() => (
          <ScreenWithNavbar>
            <TechniciansScreen />
          </ScreenWithNavbar>
        )}
      </Stack.Screen>
      <Stack.Screen 
        name="RegisterUser" 
        component={RegisterUser} 
        options={{ title: 'RegisterUser' }} 
      />
      <Stack.Screen 
        name="RegisterCV" 
        component={RegisterCVScreen} 
        options={{ 
          title: '', 
          headerStyle: {
            backgroundColor: '#2567E8',          
          },
          headerShadowVisible: false,
          headerTintColor: '#fff', 
        }} 
      />
      <Stack.Screen 
        name="TaskList" 
        options={{ title: 'Lista de Tareas' }}
      >
        {({ navigation, route }) => (
          <ScreenWithNavbar>
            <TaskListScreen navigation={navigation} route={route} />
          </ScreenWithNavbar>
        )}
      </Stack.Screen>
      <Stack.Screen 
        name="TaskDetails" 
        options={{ title: 'Detalles de Tarea' }}
      >
        {({ navigation, route }) => (
          <ScreenWithNavbar>
            <TaskDetailsScreen navigation={navigation} route={route} />
          </ScreenWithNavbar>
        )}
      </Stack.Screen>
      <Stack.Screen 
        name="Contact" 
        options={{ title: 'Contacto' }}
      >
        {({ navigation, route }) => (
          <ScreenWithNavbar>
            <ContactScreen navigation={navigation} route={route} />
          </ScreenWithNavbar>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
>>>>>>> ramaFelipe
  },
  content: {
    flex: 1,
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> ramaFelipe
