import React, { useState } from "react";
import { View, StyleSheet,  } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation";
import PanelSuperior from "../../components/PanelSuperior";
import GridCardsHome from "../../components/GridCardsHome";
import NavbarBottom from "../../components/NavbarBottom";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    console.log("Tab presionado:", tab);

    // Puedes usar esto para navegar si tus pantallas existen:
    // navigation.navigate(tab as never);
  };
  return (
    <View style={styles.container}>
      <PanelSuperior
        title="Hola, Usuario"
        onNotificationPress={() => console.log("Notificaciones")}
        onProfilePress={() => console.log("Perfil")}
        notificationCount={3}
      />

      {/* Aquí integramos el grid */}
      <GridCardsHome />

      <NavbarBottom activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    paddingTop: 100,
  },
  grid: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
});
