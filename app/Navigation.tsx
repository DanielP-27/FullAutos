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
import DetalleServicioScreen from "./screens/DetalleServicioScreen";

import NavbarBottom from "../components/NavbarBottom";

// Definir los tipos de parámetros para navegación
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  About: undefined;
  Services: undefined;
  Technicians: undefined;
  RegisterCV: undefined;
  RegisterUser: undefined;
  Contact: undefined;
  DetalleServicio: { servicioId: number };
  RegistroServicio: {
    servicioId: number;
    nombreServicio: string;
    valorServicio: string;
  };
  CitaProgramada: {
    nombreCompleto: string;
    correo: string;
    contacto: string;
    servicio: string;
    tecnico: string;
    fecha: string;
    hora: string;
  };
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

  const getActiveTab = () => {
    const currentRoute = route.name as keyof RootStackParamList;
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
      navigation.navigate(routeName as any);
    }
  };

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
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        presentation: "card",
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      {/* Pantalla de inicio */}
      <Stack.Screen name="Home" options={{ title: "Inicio" }}>
        {({ navigation, route }) => (
          <ScreenWithNavbar>
            <HomeScreen navigation={navigation} route={route} />
          </ScreenWithNavbar>
        )}
      </Stack.Screen>

      {/* Acerca de */}
      <Stack.Screen name="About" options={{ title: "Acerca de" }}>
        {() => (
          <ScreenWithNavbar>
            <AboutScreen />
          </ScreenWithNavbar>
        )}
      </Stack.Screen>

      {/* Servicios */}
      <Stack.Screen name="Services" options={{ title: "Servicios" }}>
        {() => (
          <ScreenWithNavbar>
            <ServicesScreen />
          </ScreenWithNavbar>
        )}
      </Stack.Screen>

      {/* Técnicos */}
      <Stack.Screen name="Technicians" options={{ title: "Técnicos" }}>
        {() => (
          <ScreenWithNavbar>
            <TechniciansScreen />
          </ScreenWithNavbar>
        )}
      </Stack.Screen>

      {/* Registro de usuario */}
      <Stack.Screen
        name="RegisterUser"
        component={RegisterUser}
        options={{ headerShown: false }}
      />

      {/* Registro de hoja de vida */}
      <Stack.Screen
        name="RegisterCV"
        component={RegisterCVScreen}
        options={{ headerShown: false }}
      />

      {/* Detalle del servicio */}
      <Stack.Screen
        name="DetalleServicio"
        component={DetalleServicioScreen}
        options={{ headerShown: false }}
      />

      {/* Registro del servicio */}
      <Stack.Screen
        name="RegistroServicio"
        component={RegistroServiciosScreen}
        options={{ headerShown: false }}
      />

      {/* Confirmación de cita */}
      <Stack.Screen
        name="CitaProgramada"
        component={ConfirmacionCitaScreen}
        options={{ headerShown: false }}
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
