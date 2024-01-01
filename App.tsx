import React from "react";
import { BottomNavigation } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/Settingspage";
import MapPage from "./pages/MapPage";

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "map", title: "Map", icon: "map" },
    { key: "profile", title: "Profile", icon: "account" },
    { key: "settings", title: "Settings", icon: "cog" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    map: MapPage,
    profile: ProfilePage,
    settings: SettingsPage,
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: "#303c64" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303c64",
  },
});
