// este archivo se crea para configurar la navegación
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DetalleServicioScreen from "./app/screens/DetalleServicioScreen";
import ServicesScreen from "./app/screens/ServiciosScreen";

const Navegar = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navegar.Navigator 
        initialRouteName="Servicios"
        screenOptions={{ headerShown: false }}
      >
        <Navegar.Screen name="Servicios" component={ServicesScreen} />
        <Navegar.Screen name="DetalleServicio" component={DetalleServicioScreen} />
      </Navegar.Navigator>
    </NavigationContainer>
  );
}