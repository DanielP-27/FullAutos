import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Importar todas las pantallas
import AboutScreen from "./screens/AboutScreen";
import ConfirmacionCitaScreen from "./screens/ConfirmacionCitaScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterCVScreen from "./screens/RegisterCVScreen";
import RegisterUser from "./screens/RegisterUser";
import RegistroServiciosScreen from "./screens/RegistroServicioScreen";
import ServicesScreen from "./screens/ServiciosScreen";
import TechniciansScreen from "./screens/TechniciansScreen";

import NavbarBottom from "../components/NavbarBottom";
import DetalleServicioScreen from "./screens/DetalleServicioScreen";

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
  DetalleServicio: {servicioId: number};
  RegistroServicio: {
    servicioId: number;
    nombreServicio: string;
    valorServicio: string;
  }
  CitaProgramada: {
    nombreCompleto:string;
    correo: string;
    contacto: string;
    servicio: string;
    tecnico: string;
    fecha: string;
    hora: string;
  }
};

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
};

// Componente wrapper para agregar el navbar
function ScreenWithNavbar({ children }: { children: React.ReactNode }) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute();

  // Determinar qué tab está activo basado en la ruta actual
  const getActiveTab = () => {
    const currentRoute = route.name as keyof RootStackParamList;

    // Buscar el tab que corresponde a la ruta actual
    for (const [tab, routeName] of Object.entries(TAB_TO_ROUTE_MAP)) {
      if (routeName === currentRoute) {
        return tab;
      }
    }

    return "home";
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
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <View style={styles.content}>{children}</View>
      <NavbarBottom activeTab={getActiveTab()} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" options={{ headerShown: false }}>
        {({ navigation, route }) => (
          <ScreenWithNavbar>
            <HomeScreen navigation={navigation} route={route} />
          </ScreenWithNavbar>
        )}
      </Stack.Screen>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "Acerca de" }}
      />
      <Stack.Screen
        name="Services"
        component={ServicesScreen}
        options={{ headerShown: false }}
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
        options={{ headerShown: false}}
      />
      < Stack.Screen
        name="DetalleServicio"
        component={DetalleServicioScreen}
        options={{headerShown: false}}
      />
      < Stack.Screen
        name="RegistroServicio"
        component={RegistroServiciosScreen}
        options={{headerShown: false}}
      />
      < Stack.Screen
        name="CitaProgramada"
        component={ConfirmacionCitaScreen}
        options={{headerShown: false}}
      />  
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  content: {
    flex: 1,
  },
});
